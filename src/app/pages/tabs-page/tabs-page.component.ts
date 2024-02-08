import {Component} from "@angular/core";
import {UTabContainerModule, UTabModule} from "urfumaterial";

@Component({
    templateUrl: './tabs-page.component.html',
    styleUrls: ['./tabs-page.component.scss'],
    standalone: true,
    imports: [
        UTabContainerModule,
        UTabModule
    ]
})
export class TabsPageComponent {

}
