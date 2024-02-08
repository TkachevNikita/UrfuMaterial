import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    imports: [
        RouterLink
    ],
    standalone: true
})
export class NavComponent {

}
