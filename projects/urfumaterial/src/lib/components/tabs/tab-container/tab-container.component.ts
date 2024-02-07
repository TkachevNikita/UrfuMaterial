import {Component, ContentChildren, QueryList} from "@angular/core";
import { UTabComponent } from "../tab/tab.component";

@Component({
    selector: 'u-tab-container',
    templateUrl: 'tab-container.component.html',
    styleUrls: ['tab-container.component.scss']
})
export class TabContainerComponent {
    @ContentChildren(UTabComponent) tabs: QueryList<UTabComponent> = new QueryList<UTabComponent>();

    ngAfterContentInit() {
        const activeTabs = this.tabs.filter(tab => tab.activeTab);
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }

    selectTab(tab: UTabComponent) {
        this.tabs.toArray().forEach(t => t.activeTab = false);
        tab.activeTab = true;
    }
}
