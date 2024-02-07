import {Component, Input, OnInit} from "@angular/core";
import {IconService} from "./icon.serivce";

@Component({
    selector: 'u-icon',
    templateUrl: 'icon.component.html',
    styleUrls: ['./icon.component.scss']
})
export class UIconComponent {
    // @Input() name: string = '';
    // iconSvg: string = '';

    // constructor(private _iconService: IconService) {
    //
    // }

    // ngOnInit() {
    //     this.loadIcon();
    // }
    //
    // private loadIcon() {
    //     if (this.name) {
    //         this._iconService.getSvgContent(this.name)
    //             .subscribe(svgContent =>
    //                 this.iconSvg = svgContent
    //             );
    //     }
    // }
}
