import { Directive } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../../components/button/button.component";
export class ButtonOutlinedDirective {
    constructor(_host, _renderer) {
        this._host = _host;
        this._renderer = _renderer;
    }
    ngAfterViewInit() {
        this._renderer.addClass(this._host.buttonElement.nativeElement, 'u-btn--outlined');
        switch (this._host.variant) {
            case "danger":
                this._renderer.addClass(this._host.buttonElement.nativeElement, 'u-btn--outlined-danger');
                break;
            case "primary":
                this._renderer.addClass(this._host.buttonElement.nativeElement, 'u-btn--outlined-primary');
                break;
            case "simple":
                this._renderer.addClass(this._host.buttonElement.nativeElement, 'u-btn--outlined-simple');
                break;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonOutlinedDirective, deps: [{ token: i1.ButtonComponent }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.2", type: ButtonOutlinedDirective, selector: "[outlined]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonOutlinedDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[outlined]',
                }]
        }], ctorParameters: () => [{ type: i1.ButtonComponent }, { type: i0.Renderer2 }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLW91dGxpbmVkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VyZnVtYXRlcmlhbC9zcmMvbGliL2RpcmVjdGl2ZXMvYnV0dG9uL2J1dHRvbi1vdXRsaW5lZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQWdDLE1BQU0sZUFBZSxDQUFDOzs7QUFNdEYsTUFBTSxPQUFPLHVCQUF1QjtJQUNoQyxZQUFvQixLQUFzQixFQUFVLFNBQW9CO1FBQXBELFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFJLENBQUM7SUFFN0UsZUFBZTtRQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25GLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7Z0JBQzFGLE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLHlCQUF5QixDQUFDLENBQUM7Z0JBQzNGLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7Z0JBQzFGLE1BQU07UUFDZCxDQUFDO0lBQ0wsQ0FBQzs4R0FoQlEsdUJBQXVCO2tHQUF2Qix1QkFBdUI7OzJGQUF2Qix1QkFBdUI7a0JBSG5DLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7aUJBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCdXR0b25Db21wb25lbnR9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50XCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW291dGxpbmVkXScsXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbk91dGxpbmVkRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaG9zdDogQnV0dG9uQ29tcG9uZW50LCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5faG9zdC5idXR0b25FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd1LWJ0bi0tb3V0bGluZWQnKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLl9ob3N0LnZhcmlhbnQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJkYW5nZXJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9ob3N0LmJ1dHRvbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3UtYnRuLS1vdXRsaW5lZC1kYW5nZXInKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwcmltYXJ5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5faG9zdC5idXR0b25FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd1LWJ0bi0tb3V0bGluZWQtcHJpbWFyeScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNpbXBsZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2hvc3QuYnV0dG9uRWxlbWVudC5uYXRpdmVFbGVtZW50LCAndS1idG4tLW91dGxpbmVkLXNpbXBsZScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19