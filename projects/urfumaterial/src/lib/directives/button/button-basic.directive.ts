import {AfterViewInit, Directive, Renderer2} from "@angular/core";
import {ButtonComponent} from "../../components/button.component";

@Directive({
    selector: '[basic]',
})
export class ButtonBasicDirective implements AfterViewInit {
    constructor(private _host: ButtonComponent, private _renderer: Renderer2) { }

    public ngAfterViewInit() {
        this._renderer.addClass(this._host.buttonElement.nativeElement, 'u-btn--basic');
        switch (this._host.variant) {
            case "danger":
                this._renderer.addClass(this._host.buttonElement.nativeElement, 'u-btn--basic-danger');
                break;
            case "primary":
                this._renderer.addClass(this._host.buttonElement.nativeElement, 'u-btn--basic-primary');
                break;
            case "simple":
                this._renderer.addClass(this._host.buttonElement.nativeElement, 'u-btn--basic-simple');
                break;
        }
    }
}
