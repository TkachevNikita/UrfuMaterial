import {Component, Input} from "@angular/core";

@Component({
    selector: 'u-tab',
    templateUrl: 'tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class UTabComponent {
    @Input() public title!: string;
    public activeTab: boolean = false;

}
