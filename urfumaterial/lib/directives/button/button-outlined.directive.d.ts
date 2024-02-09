import { AfterViewInit, Renderer2 } from "@angular/core";
import { ButtonComponent } from "../../components/button/button.component";
import * as i0 from "@angular/core";
export declare class ButtonOutlinedDirective implements AfterViewInit {
    private _host;
    private _renderer;
    constructor(_host: ButtonComponent, _renderer: Renderer2);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonOutlinedDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ButtonOutlinedDirective, "[outlined]", never, {}, {}, never, never, false, never>;
}
