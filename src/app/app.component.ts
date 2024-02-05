import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonComponent} from "../../projects/urfumaterial/src/lib/components/button.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [RouterOutlet, ButtonComponent],
})
export class AppComponent {
    onClick() {
        console.log(1);
    }
}
