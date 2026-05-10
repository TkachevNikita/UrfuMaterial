import type { Meta, StoryObj } from '@storybook/angular';
import { Component, input } from '@angular/core';
import { UOptionComponent, USelectComponent } from '@urfu-ui/u-forms';

@Component({
  selector: 'app-select-wrapper',
  standalone: true,
  imports: [USelectComponent, UOptionComponent],
  template: `
    <u-select
      [placeholder]="placeholder()"
      [multiple]="multiple()"
      [disabled]="disabled()"
    >
      <u-option [value]="1" label="Вариант 1"></u-option>
      <u-option [value]="2" label="Вариант 2"></u-option>
      <u-option [value]="3" label="Вариант 3"></u-option>
    </u-select>
  `,
})
class SelectStoryWrapperComponent {
  public placeholder = input('');
  public multiple = input(false);
  public disabled = input(false);
}

const meta: Meta<SelectStoryWrapperComponent> = {
  title: 'UForms/USelect',
  component: SelectStoryWrapperComponent,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<SelectStoryWrapperComponent>;

export const Default: Story = {
  args: {
    placeholder: 'Выберите элемент',
    multiple: false,
    disabled: false,
  },
};
