import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { UToastComponent, UToastStatus } from './u-toast.component';

@Component({
  template: '<ng-template #container />',
  styleUrl: './u-toast-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UToastContainerComponent {
  private readonly container = viewChild.required('container', {
    read: ViewContainerRef,
  });

  public createToast(
    data: string,
    status: UToastStatus,
  ): ComponentRef<UToastComponent> {
    const toastRef = this.container().createComponent(UToastComponent);

    toastRef.instance.data.set(data);
    toastRef.instance.status.set(status);

    return toastRef;
  }
}
