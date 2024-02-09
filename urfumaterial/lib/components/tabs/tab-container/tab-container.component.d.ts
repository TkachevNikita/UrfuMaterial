import { AfterContentInit, QueryList } from "@angular/core";
import { UTabComponent } from "../tab/tab.component";
import * as i0 from "@angular/core";
export declare class TabContainerComponent implements AfterContentInit {
    tabs: QueryList<UTabComponent>;
    ngAfterContentInit(): void;
    selectTab(tab: UTabComponent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabContainerComponent, "u-tab-container", never, {}, {}, ["tabs"], ["*"], false, never>;
}
