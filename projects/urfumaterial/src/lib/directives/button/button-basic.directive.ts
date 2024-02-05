import {AfterViewInit, Directive, Renderer2} from "@angular/core";
import {ButtonComponent} from "../../components/button.component";

@Directive({
    selector: '[basic]',
})
export class ButtonBasicDirective implements AfterViewInit {
    constructor(private host: ButtonComponent, private _renderer: Renderer2) { }

    ngAfterViewInit() {
        this._renderer.addClass(this.host.buttonElement.nativeElement, 'u-btn--basic');
        switch (this.host.variant) {
            case "danger":
                this._renderer.addClass(this.host.buttonElement.nativeElement, 'u-btn--basic-danger');
                break;
            case "primary":
                this._renderer.addClass(this.host.buttonElement.nativeElement, 'u-btn--basic-primary');
                break;
        }
    }
}
