import {
  ChangeDetectionStrategy,
  Component,
  computed,
  model,
  output,
  signal,
} from '@angular/core';
import { UIconComponent } from '../u-icon/u-icon.component';

export type UToastStatus = 'fail' | 'info' | 'success' | 'warning';

@Component({
  selector: 'u-toast',
  templateUrl: './u-toast.component.html',
  styleUrl: './u-toast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UIconComponent],
})
export class UToastComponent {
  public readonly data = model<string>('');
  public readonly status = model<UToastStatus>('info');
  public readonly closed = output<void>();
  public readonly isVisible = signal(true);

  public readonly icon = computed(() => {
    switch (this.status()) {
      case 'success':
        return 'ok';
      case 'warning':
        return 'question';
      case 'info':
        return 'information';
      case 'fail':
        return 'attention';
    }
  });

  public close(): void {
    this.closed.emit();
  }

  public hide(): void {
    this.isVisible.set(false);
  }
}
