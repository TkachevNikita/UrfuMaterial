import { Directive } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../../components/button/button.component";
export class ButtonBasicDirective {
    constructor(_host, _renderer) {
        this._host = _host;
        this._renderer = _renderer;
    }
    ngAfterViewInit() {
        this._renderer.addClass(this._host.buttonElement.nativeElement, 'u-btn--basic');
        switch (this._host.variant) {
            case "danger":
                this._renderer.addClass(this._host.buttonElement.nativeElement, 'u-btn--basic-danger');
                break;
            case "primary":
                this._renderer.addClass(this._host.buttonElement.nativeElement, 'u-btn--basic-primary');
                break;
            case "simple":
                this._renderer.addClass(this._host.buttonElement.nativeElement, 'u-btn--basic-simple');
                break;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonBasicDirective, deps: [{ token: i1.ButtonComponent }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.2", type: ButtonBasicDirective, selector: "[basic]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonBasicDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[basic]',
                }]
        }], ctorParameters: () => [{ type: i1.ButtonComponent }, { type: i0.Renderer2 }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWJhc2ljLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VyZnVtYXRlcmlhbC9zcmMvbGliL2RpcmVjdGl2ZXMvYnV0dG9uL2J1dHRvbi1iYXNpYy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQVksTUFBTSxlQUFlLENBQUM7OztBQU1sRSxNQUFNLE9BQU8sb0JBQW9CO0lBQzdCLFlBQW9CLEtBQXNCLEVBQVUsU0FBb0I7UUFBcEQsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQUksQ0FBQztJQUV0RSxlQUFlO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNoRixRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekIsS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO2dCQUN2RixNQUFNO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO2dCQUN4RixNQUFNO1lBQ1YsS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO2dCQUN2RixNQUFNO1FBQ2QsQ0FBQztJQUNMLENBQUM7OEdBaEJRLG9CQUFvQjtrR0FBcEIsb0JBQW9COzsyRkFBcEIsb0JBQW9CO2tCQUhoQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxTQUFTO2lCQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBSZW5kZXJlcjJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0J1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnRcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbYmFzaWNdJyxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQmFzaWNEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ob3N0OiBCdXR0b25Db21wb25lbnQsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5faG9zdC5idXR0b25FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd1LWJ0bi0tYmFzaWMnKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLl9ob3N0LnZhcmlhbnQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJkYW5nZXJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9ob3N0LmJ1dHRvbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3UtYnRuLS1iYXNpYy1kYW5nZXInKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwcmltYXJ5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5faG9zdC5idXR0b25FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd1LWJ0bi0tYmFzaWMtcHJpbWFyeScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNpbXBsZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2hvc3QuYnV0dG9uRWxlbWVudC5uYXRpdmVFbGVtZW50LCAndS1idG4tLWJhc2ljLXNpbXBsZScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19