import { Component, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import * as i0 from "@angular/core";
export class UInputComponent {
    constructor() {
        this._onTouched = () => { };
        this._onChange = () => { };
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    writeValue(value) {
        this.value = value;
    }
    onChange(event) {
        const newValue = event.target.value;
        this._onChange(newValue);
        this._onTouched();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: UInputComponent, selector: "u-input", providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UInputComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"u-input\">\n    <input type=\"text\" id=\"name\" placeholder=\" \" (input)=\"onChange($event)\" [value]=\"value\">\n    <label for=\"name\">\u0412\u0430\u0448\u0435 \u0438\u043C\u044F</label>\n</div>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap\";*{font-family:Montserrat,sans-serif;margin:0;padding:0}ul{text-decoration:none;list-style-type:none}.u-input{position:relative;margin:20px 0}.u-input input{border:1px solid #ccc;border-radius:12px;font-size:16px;padding:15px 10px 15px 25px;display:block;transition:border-color .3s;background-color:#fff;width:500px}.u-input input:focus{border-color:#1e4391;outline:none}.u-input label{position:absolute;top:32%;left:25px;cursor:text;font-size:16px;transition:all .3s;color:#999;background-color:#fff;padding:0 4px;margin-left:-4px}.u-input input:focus~label,.u-input input:not(:placeholder-shown)~label{top:-10px;left:20px;font-size:12px;color:#0f2b5e}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'u-input', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UInputComponent),
                            multi: true
                        }
                    ], template: "<div class=\"u-input\">\n    <input type=\"text\" id=\"name\" placeholder=\" \" (input)=\"onChange($event)\" [value]=\"value\">\n    <label for=\"name\">\u0412\u0430\u0448\u0435 \u0438\u043C\u044F</label>\n</div>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap\";*{font-family:Montserrat,sans-serif;margin:0;padding:0}ul{text-decoration:none;list-style-type:none}.u-input{position:relative;margin:20px 0}.u-input input{border:1px solid #ccc;border-radius:12px;font-size:16px;padding:15px 10px 15px 25px;display:block;transition:border-color .3s;background-color:#fff;width:500px}.u-input input:focus{border-color:#1e4391;outline:none}.u-input label{position:absolute;top:32%;left:25px;cursor:text;font-size:16px;transition:all .3s;color:#999;background-color:#fff;padding:0 4px;margin-left:-4px}.u-input input:focus~label,.u-input input:not(:placeholder-shown)~label{top:-10px;left:20px;font-size:12px;color:#0f2b5e}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXJmdW1hdGVyaWFsL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cmZ1bWF0ZXJpYWwvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFjekUsTUFBTSxPQUFPLGVBQWU7SUFaNUI7UUFlWSxlQUFVLEdBQWUsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ2xDLGNBQVMsR0FBNEIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0tBbUJ6RDtJQWpCVSxnQkFBZ0IsQ0FBQyxFQUFPO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxFQUFPO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxVQUFVLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRU0sUUFBUSxDQUFDLEtBQVk7UUFDeEIsTUFBTSxRQUFRLEdBQUksS0FBSyxDQUFDLE1BQTJCLENBQUMsS0FBSyxDQUFDO1FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7OEdBdEJRLGVBQWU7a0dBQWYsZUFBZSxrQ0FSYjtZQUNQO2dCQUNJLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUM5QyxLQUFLLEVBQUUsSUFBSTthQUNkO1NBQ0osMEJDYkwsd05BSUE7OzJGRFdhLGVBQWU7a0JBWjNCLFNBQVM7K0JBQ0ksU0FBUyxhQUdSO3dCQUNQOzRCQUNJLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDOzRCQUM5QyxLQUFLLEVBQUUsSUFBSTt5QkFDZDtxQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd1LWlucHV0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2lucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVUlucHV0Q29tcG9uZW50KSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFVJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgICBwdWJsaWMgdmFsdWUhOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIF9vblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgICBwcml2YXRlIF9vbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwidS1pbnB1dFwiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiIFwiIChpbnB1dCk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgW3ZhbHVlXT1cInZhbHVlXCI+XG4gICAgPGxhYmVsIGZvcj1cIm5hbWVcIj7QktCw0YjQtSDQuNC80Y88L2xhYmVsPlxuPC9kaXY+XG4iXX0=