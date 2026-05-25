import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, inject, Injectable, Injector } from '@angular/core';
import { UToastContainerComponent } from './u-toast-container.component';
import { UToastComponent, UToastStatus } from './u-toast.component';

@Injectable({ providedIn: 'root' })
export class UToastService {
  private readonly overlay = inject(Overlay);
  private readonly injector = inject(Injector);

  private readonly toasts = new Set<ComponentRef<UToastComponent>>();
  private overlayRef: OverlayRef | null = null;
  private containerRef: ComponentRef<UToastContainerComponent> | null = null;

  public open(
    data: string,
    status: UToastStatus = 'info',
    timeout = 5000,
  ): ComponentRef<UToastComponent> {
    const toastRef = this.ensureContainer().instance.createToast(data, status);

    this.toasts.add(toastRef);
    const closeSubscription = toastRef.instance.closed.subscribe(() =>
      this.close(toastRef),
    );

    const timeoutId = setTimeout(() => this.close(toastRef), timeout);
    toastRef.onDestroy(() => {
      closeSubscription.unsubscribe();
      clearTimeout(timeoutId);
    });

    return toastRef;
  }

  private close(toastRef: ComponentRef<UToastComponent>): void {
    if (!this.toasts.delete(toastRef)) {
      return;
    }

    toastRef.instance.hide();

    // отложенно дестроим, чтобы анимация успела отработать
    setTimeout(() => {
      this.destroy(toastRef);
    }, 2100);
  }

  private destroy(toastRef: ComponentRef<UToastComponent>): void {
    toastRef.destroy();

    if (this.toasts.size === 0) {
      this.overlayRef?.dispose();
      this.overlayRef = null;
      this.containerRef = null;
    }
  }

  private ensureContainer(): ComponentRef<UToastContainerComponent> {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay
          .position()
          .global()
          .top('10px')
          .right('10px'),
        scrollStrategy: this.overlay.scrollStrategies.noop(),
      });
    }

    if (!this.containerRef) {
      this.containerRef = this.overlayRef.attach(
        new ComponentPortal(UToastContainerComponent, null, this.injector),
      );
    }

    return this.containerRef;
  }
}
