import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {UTabComponent} from "./tab.component";

@NgModule({
    declarations: [
        UTabComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        UTabComponent
    ]
})
export class UTabModule {}
