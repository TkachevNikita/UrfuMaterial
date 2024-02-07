import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {UButtonModule} from "./components/button/button.module";
import {UTabContainerModule} from "./components/tabs/tab-container/tab-container.module";
import {UTabModule} from "./components/tabs/tab/tab.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [],
    imports: [
        UButtonModule,
        UTabContainerModule,
        UTabModule,
    ],
    exports: [
        UButtonModule,
        UTabModule,
        UTabContainerModule,
    ]
})
export class UrfuMaterialModule {}
