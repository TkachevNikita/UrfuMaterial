import {NgModule} from "@angular/core";
import {ButtonComponent} from "./components/button.component";
import {UrfumaterialComponent} from "./urfumaterial.component";

@NgModule({
    declarations: [
        ButtonComponent,
        UrfumaterialComponent
    ],
    imports: [
    ],
    exports: [
        UrfumaterialComponent,
        ButtonComponent
    ]
})
export class UrfuMaterialModule { }
