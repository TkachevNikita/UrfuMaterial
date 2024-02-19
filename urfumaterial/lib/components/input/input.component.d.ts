import { ControlValueAccessor } from "@angular/forms";
import * as i0 from "@angular/core";
export declare class UInputComponent implements ControlValueAccessor {
    value: string;
    private _onTouched;
    private _onChange;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: string): void;
    onChange(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UInputComponent, "u-input", never, {}, {}, never, never, false, never>;
}
