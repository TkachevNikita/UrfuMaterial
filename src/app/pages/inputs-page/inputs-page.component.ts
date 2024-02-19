import {Component} from "@angular/core";
import {UButtonModule, UInputModule} from "urfumaterial";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
    templateUrl: './inputs-page.component.html',
    styleUrls: ['./inputs-page.component.scss'],
    imports: [
        UInputModule,
        ReactiveFormsModule,
        UButtonModule
    ],
    standalone: true
})
export class InputsPageComponent {
    formGroup: FormGroup;

    constructor() {
        this.formGroup = new FormGroup({
            input: new FormControl('')
        })
    }

    onClick() {
        console.log(this.formGroup.value);
    }
}
