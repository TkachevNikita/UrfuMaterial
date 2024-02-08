import {Component} from "@angular/core";
import {UButtonModule} from "urfumaterial";

@Component({
    templateUrl: './button-page.component.html',
    styleUrls: ['./button-page.component.scss'],
    standalone: true,
    imports: [
        UButtonModule
    ]
})
export class ButtonPageComponent {
    public onClick() {
        console.log(1);
    }

}
