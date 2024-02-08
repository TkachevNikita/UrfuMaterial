import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {UInputComponent} from "./input.component";

@NgModule({
    declarations: [
        UInputComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        UInputComponent
    ]
})
export class UInputModule {}
