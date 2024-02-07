import {Component, Input} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'u-tab',
    templateUrl: 'tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class UTabComponent {
    @Input() public tabTitle!: string;
    public activeTab: boolean = false;

}
