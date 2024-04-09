import {
    Component,
    ElementRef,
    HostBinding,
    Input,
    ViewChild
} from "@angular/core";

@Component({
    selector: 'u-button',
    templateUrl: 'button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input({
        required: true
    }) variant!: 'primary' | 'danger' | 'simple';
    @Input() disabled!: boolean | string;

    @HostBinding('attr.disabled')
    get isDisabled(): string | null {
        return this.disabled === '' || this.disabled === true ? '' : null;
    }

    @ViewChild('buttonElement') buttonElement!: ElementRef;
    public mouseX: number = 0;
    public mouseY: number = 0;
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
