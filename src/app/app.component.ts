import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UrfuMaterialModule } from 'urfumaterial';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [RouterOutlet, UrfuMaterialModule],
})
export class AppComponent {
  title = 'uikit';
}
