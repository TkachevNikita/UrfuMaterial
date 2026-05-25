import { OverlayModule } from '@angular/cdk/overlay';
import { Component, inject, input } from '@angular/core';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { UButtonComponent, UToastService, UToastStatus } from '@urfu-ui/u-core';

@Component({
  selector: 'storybook-toast-host',
  template: `
    <div
      style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;"
    >
      <u-button theme="prime" (click)="openToast()"> Show toast </u-button>

      <u-button theme="gray" (click)="openAllToasts()">
        Show all statuses
      </u-button>
    </div>
  `,
  imports: [UButtonComponent],
})
class ToastHostComponent {
  private readonly toastService = inject(UToastService);

  public readonly text = input('Toast message');
  public readonly status = input<UToastStatus>('info');
  public readonly timeout = input(5000);

  public openToast(): void {
    this.toastService.open(this.text(), this.status(), this.timeout());
  }

  public openAllToasts(): void {
    const statuses: UToastStatus[] = ['info', 'success', 'warning', 'fail'];

    statuses.forEach((status, index) => {
      this.toastService.open(
        `${status}: ${this.text()}`,
        status,
        this.timeout() + index * 500,
      );
    });
  }
}

const meta: Meta<ToastHostComponent> = {
  title: 'u-core/UToast',
  component: ToastHostComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [OverlayModule],
    }),
  ],
  argTypes: {
    text: {
      control: 'text',
      name: 'Text',
    },
    status: {
      control: 'select',
      options: ['info', 'success', 'warning', 'fail'],
      name: 'Status',
    },
    timeout: {
      control: 'number',
      name: 'Timeout',
    },
  },
};

export default meta;
type Story = StoryObj<ToastHostComponent>;

export const Default: Story = {
  args: {
    text: 'Toast message',
    status: 'info',
    timeout: 5000,
  },
  render: (args) => ({
    props: args,
    template: `
      <storybook-toast-host
        [text]="text"
        [status]="status"
        [timeout]="timeout"
      />
    `,
  }),
};
