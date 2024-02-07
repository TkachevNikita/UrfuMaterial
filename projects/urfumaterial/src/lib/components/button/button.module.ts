import { NgModule } from '@angular/core';
import { ButtonBasicDirective } from "../../directives/button/button-basic.directive";
import {ButtonComponent} from "./button.component";
import {CommonModule} from "@angular/common";
import { ButtonOutlinedDirective } from "../../directives/button/button-outlined.directive";

@NgModule({
    declarations: [
        ButtonComponent,
        ButtonOutlinedDirective,
        ButtonBasicDirective,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ButtonBasicDirective,
        ButtonOutlinedDirective,
        ButtonComponent
    ]
})
export class UButtonModule {}
