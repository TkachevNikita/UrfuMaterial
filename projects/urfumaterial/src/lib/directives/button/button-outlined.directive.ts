import {AfterViewInit, Directive, ElementRef, OnInit, Renderer2} from "@angular/core";
import {ButtonComponent} from "../../components/button/button.component";

@Directive({
    selector: '[outlined]',
})
export class ButtonOutlinedDirective implements AfterViewInit {
    constructor(private _host: ButtonComponent, private _renderer: Renderer2) { }

    ngAfterViewInit() {
        this._renderer.addClass(this._host.buttonElement.nativeElement, 'u-btn--outlined');
        switch (this._host.variant) {
            case "danger":
                this._renderer.addClass(this._host.buttonElement.nativeElement, 'u-btn--outlined-danger');
                break;
            case "primary":
                this._renderer.addClass(this._host.buttonElement.nativeElement, 'u-btn--outlined-primary');
                break;
            case "simple":
                this._renderer.addClass(this._host.buttonElement.nativeElement, 'u-btn--outlined-simple');
                break;
        }
    }
}
