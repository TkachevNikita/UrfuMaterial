import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {TabContainerComponent} from "./tab-container.component";

@NgModule({
    declarations: [
        TabContainerComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        TabContainerComponent
    ]
})
export class UTabContainerModule {}
