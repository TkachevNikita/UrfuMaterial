import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UButtonModule, UIconModule, UTabContainerModule, UTabModule} from "urfumaterial";
import {HeaderComponent} from "./components/header/header.component";
import {NavComponent} from "./components/nav/nav.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
        NavComponent
    ],
})
export class AppComponent {
}
