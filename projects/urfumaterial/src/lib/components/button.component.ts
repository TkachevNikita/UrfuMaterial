import {Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Host, Input, Optional, ViewChild} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ButtonBasicDirective} from "../directives/button/button-basic.directive";
import {ButtonOutlinedDirective} from "../directives/button/button-outlined.directive";

@Component({
    selector: 'u-button',
    templateUrl: 'button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() variant!: 'primary' | 'danger';

    @ViewChild('buttonElement') buttonElement!: ElementRef;
    public mouseX!: number;
    public mouseY!: number;
    public waveSize!: number;

    public onMouseMove(event: MouseEvent) {
        const rect = this.buttonElement.nativeElement.getBoundingClientRect();
        this.mouseX = event.clientX - rect.left;
        this.mouseY = event.clientY - rect.top;

        const maxWidth = Math.max(this.mouseX, rect.width - this.mouseX);
        const maxHeight = Math.max(this.mouseY, rect.height - this.mouseY);
        this.waveSize = Math.sqrt(maxWidth ** 2 + maxHeight ** 2) * 2;
    }
}
