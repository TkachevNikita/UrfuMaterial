import {Component, input, InputSignal} from "@angular/core";
import {UButtonModule} from "urfumaterial";
import {CodeComponent} from "../../components/code/code.component";
import {HighlightModule} from "ngx-highlightjs";
import {HighlightLineNumbers} from "ngx-highlightjs/line-numbers";

@Component({
    templateUrl: './button-page.component.html',
    styleUrls: ['./button-page.component.scss'],
    standalone: true,
    imports: [
        UButtonModule,
        CodeComponent,
        HighlightModule,
        HighlightLineNumbers
    ]
})
export class ButtonPageComponent {
    public onClick() {
        console.log(1);
    }


    code: string = `    <div class="container">
        <u-button basic variant="primary" (click)="onClick()">Подать заявку</u-button>
        <u-button basic variant="simple" (click)="onClick()">Подать заявку</u-button>
        <u-button outlined variant="primary" (click)="onClick()">Подать заявку</u-button>
        <u-button outlined variant="simple" (click)="onClick()">Подать заявку</u-button>
        <u-button basic variant="danger" (click)="onClick()">Подать заявку</u-button>
        <u-button basic disabled variant="danger" (click)="onClick()">Подать заявку</u-button>
    </div>`;
}
