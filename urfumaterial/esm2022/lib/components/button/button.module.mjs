import { NgModule } from '@angular/core';
import { ButtonBasicDirective } from "../../directives/button/button-basic.directive";
import { ButtonComponent } from "./button.component";
import { CommonModule } from "@angular/common";
import { ButtonOutlinedDirective } from "../../directives/button/button-outlined.directive";
import * as i0 from "@angular/core";
export class UButtonModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.2", ngImport: i0, type: UButtonModule, declarations: [ButtonComponent,
            ButtonOutlinedDirective,
            ButtonBasicDirective], imports: [CommonModule], exports: [ButtonBasicDirective,
            ButtonOutlinedDirective,
            ButtonComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UButtonModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ButtonComponent,
                        ButtonOutlinedDirective,
                        ButtonBasicDirective,
                    ],
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        ButtonBasicDirective,
                        ButtonOutlinedDirective,
                        ButtonComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VyZnVtYXRlcmlhbC9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOztBQWlCNUYsTUFBTSxPQUFPLGFBQWE7OEdBQWIsYUFBYTsrR0FBYixhQUFhLGlCQWJsQixlQUFlO1lBQ2YsdUJBQXVCO1lBQ3ZCLG9CQUFvQixhQUdwQixZQUFZLGFBR1osb0JBQW9CO1lBQ3BCLHVCQUF1QjtZQUN2QixlQUFlOytHQUdWLGFBQWEsWUFSbEIsWUFBWTs7MkZBUVAsYUFBYTtrQkFmekIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsZUFBZTt3QkFDZix1QkFBdUI7d0JBQ3ZCLG9CQUFvQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLG9CQUFvQjt3QkFDcEIsdUJBQXVCO3dCQUN2QixlQUFlO3FCQUNsQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25CYXNpY0RpcmVjdGl2ZSB9IGZyb20gXCIuLi8uLi9kaXJlY3RpdmVzL2J1dHRvbi9idXR0b24tYmFzaWMuZGlyZWN0aXZlXCI7XG5pbXBvcnQge0J1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vYnV0dG9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEJ1dHRvbk91dGxpbmVkRGlyZWN0aXZlIH0gZnJvbSBcIi4uLy4uL2RpcmVjdGl2ZXMvYnV0dG9uL2J1dHRvbi1vdXRsaW5lZC5kaXJlY3RpdmVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBCdXR0b25PdXRsaW5lZERpcmVjdGl2ZSxcbiAgICAgICAgQnV0dG9uQmFzaWNEaXJlY3RpdmUsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQnV0dG9uQmFzaWNEaXJlY3RpdmUsXG4gICAgICAgIEJ1dHRvbk91dGxpbmVkRGlyZWN0aXZlLFxuICAgICAgICBCdXR0b25Db21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFVCdXR0b25Nb2R1bGUge31cbiJdfQ==