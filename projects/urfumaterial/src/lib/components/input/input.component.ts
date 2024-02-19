import { Component, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'u-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UInputComponent),
            multi: true
        }
    ]
})
export class UInputComponent implements ControlValueAccessor {
    public value!: string;

    private _onTouched: () => void = () => {};
    private _onChange: (value: string) => void = () => {};

    public registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }

    public writeValue(value: string): void {
        this.value = value;
    }

    public onChange(event: Event) {
        const newValue = (event.target as HTMLInputElement).value;
        this._onChange(newValue);
        this._onTouched();
    }
}
