import {NgModule} from "@angular/core";
import {ButtonComponent} from "./components/button.component";
import {UrfumaterialComponent} from "./urfumaterial.component";
import {NgStyle} from "@angular/common";

@NgModule({
    declarations: [
        ButtonComponent,
        UrfumaterialComponent
    ],
    imports: [
        NgStyle
    ],
    exports: [
        UrfumaterialComponent,
        ButtonComponent
    ]
})
export class UrfuMaterialModule { }
