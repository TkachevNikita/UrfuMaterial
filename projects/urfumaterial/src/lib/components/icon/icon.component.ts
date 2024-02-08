import {Component, Input, OnInit} from "@angular/core";
import {IconService} from "./icon.serivce";

@Component({
    selector: 'u-icon',
    templateUrl: 'icon.component.html',
    styleUrls: ['./icon.component.scss']
})
export class UIconComponent {
    @Input() name!: string;
}
