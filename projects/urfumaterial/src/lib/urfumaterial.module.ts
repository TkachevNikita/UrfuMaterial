import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {UButtonModule} from "./components/button/button.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        UButtonModule
    ],
    exports: [
        UButtonModule
    ]
})
export class UrfuMaterialModule {}
