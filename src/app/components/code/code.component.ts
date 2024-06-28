import {Component, Input} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HighlightLineNumbers} from "ngx-highlightjs/line-numbers";
import {HighlightModule} from "ngx-highlightjs";

@Component({
    selector: 'app-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        HighlightLineNumbers,
        HighlightModule,
    ]
})
export class CodeComponent {
    @Input({ required: true }) public code!: string;
    @Input() public language: string = 'html';

}
