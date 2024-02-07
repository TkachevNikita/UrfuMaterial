import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UButtonModule} from "urfumaterial";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [RouterOutlet, UButtonModule],
})
export class AppComponent {
    onClick() {
        console.log(1);
    }
}
