import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {UIconComponent} from "./icon.component";
import {HttpClientModule} from "@angular/common/http";
import {IconService} from "./icon.serivce";

@NgModule({
    declarations: [
        UIconComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        UIconComponent
    ],
    providers: [
        IconService
    ]
})
export class UIconModule {}
