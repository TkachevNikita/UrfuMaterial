import {ChangeDetectionStrategy, Component} from "@angular/core";
import {UButtonModule, UTabContainerModule, UTabModule} from "urfumaterial";
import {CodeComponent} from "../../components/code/code.component";
import {HighlightModule} from "ngx-highlightjs";
import {HighlightLineNumbers} from "ngx-highlightjs/line-numbers";

@Component({
    templateUrl: './button-page.component.html',
    styleUrls: ['./button-page.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        UButtonModule,
        CodeComponent,
        HighlightModule,
        HighlightLineNumbers,
        UTabModule,
        UTabContainerModule
    ]
})
export class ButtonPageComponent {
    public onClick(): void {
        console.log('This is example of a u-button component');
    }


    public htmlCode: string = `    <div class="container">
        <u-button basic variant="primary" (click)="onClick()">Подать заявку</u-button>
        <u-button basic variant="simple" (click)="onClick()">Подать заявку</u-button>
        <u-button outlined variant="primary" (click)="onClick()">Подать заявку</u-button>
        <u-button outlined variant="simple" (click)="onClick()">Подать заявку</u-button>
        <u-button basic variant="danger" (click)="onClick()">Подать заявку</u-button>
        <u-button basic disabled variant="danger" (click)="onClick()">Подать заявку</u-button>
    </div>`;

    public typeScriptCode: string = `    import {ChangeDetectionStrategy, Component} from "@angular/core";
    import {UButtonModule, UTabContainerModule, UTabModule} from "urfumaterial";

    @Component({
        templateUrl: './button-page.component.html',
        styleUrls: ['./button-page.component.scss'],
        standalone: true,
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [
            UButtonModule,
        ]
    })
    export class ButtonPageComponent {
        public onClick(): void {
            console.log('This is example of a u-button component');
        }
    }
    `

    public cssCode: string = `   .container {
        display: flex;
        gap: 20px;
        margin-bottom: 50px;
    }`
}
