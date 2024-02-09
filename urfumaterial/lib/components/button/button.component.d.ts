import { ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class ButtonComponent {
    variant: 'primary' | 'danger' | 'simple';
    disabled: boolean | string;
    get isDisabled(): string | null;
    buttonElement: ElementRef;
    mouseX: number;
    mouseY: number;
    waveSize: number;
    onMouseMove(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "u-button", never, { "variant": { "alias": "variant"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*"], false, never>;
}
