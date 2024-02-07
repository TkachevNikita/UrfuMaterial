import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UButtonModule, UTabContainerModule, UTabModule} from "urfumaterial";
import {BrowserModule} from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [
        RouterOutlet,
        UButtonModule,
        UTabContainerModule,
        UTabModule,
    ],
})
export class AppComponent {
    onClick() {
        console.log(1);
    }
}
