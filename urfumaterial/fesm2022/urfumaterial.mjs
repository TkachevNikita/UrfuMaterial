import * as i0 from '@angular/core';
import { Injectable, Component, Input, HostBinding, ViewChild, Directive, NgModule, QueryList, ContentChildren } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

class UrfumaterialService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UrfumaterialService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UrfumaterialService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UrfumaterialService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class UrfumaterialComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UrfumaterialComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: UrfumaterialComponent, isStandalone: true, selector: "lib-urfumaterial", ngImport: i0, template: `
    <p>
      urfumaterial works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UrfumaterialComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-urfumaterial', template: `
    <p>
      urfumaterial works!
    </p>
  `, standalone: true }]
        }] });

class ButtonComponent {
    constructor() {
        this.mouseX = 0;
        this.mouseY = 0;
    }
    get isDisabled() {
        return this.disabled === '' || this.disabled === true ? '' : null;
    }
    onMouseMove(event) {
        const rect = this.buttonElement.nativeElement.getBoundingClientRect();
        this.mouseX = event.clientX - rect.left;
        this.mouseY = event.clientY - rect.top;
        const maxWidth = Math.max(this.mouseX, rect.width - this.mouseX);
        const maxHeight = Math.max(this.mouseY, rect.height - this.mouseY);
        this.waveSize = Math.sqrt(maxWidth ** 2 + maxHeight ** 2) * 2;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: ButtonComponent, selector: "u-button", inputs: { variant: "variant", disabled: "disabled" }, host: { properties: { "attr.disabled": "this.isDisabled" } }, viewQueries: [{ propertyName: "buttonElement", first: true, predicate: ["buttonElement"], descendants: true }], ngImport: i0, template: "<button #buttonElement\n        (mousemove)=\"onMouseMove($event)\"\n        [attr.disabled]=\"isDisabled\"\n        [ngStyle]=\"{\n            '--mouse-x': mouseX + 'px',\n            '--mouse-y': mouseY + 'px',\n            '--wave-size': waveSize + 'px'\n        }\"\n        class=\"u-btn\">\n    <ng-content></ng-content>\n</button>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\";@import\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap\";@import\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap\";*{font-family:Montserrat,sans-serif;margin:0;padding:0}ul{text-decoration:none;list-style-type:none}.u-btn{padding:15px 50px;box-shadow:0 0 12px -2px #00000080;border-radius:10px;border:none;font-weight:500;font-size:14px;white-space:nowrap;cursor:pointer;position:relative;transition:background-color .6s ease;overflow:hidden;width:100%}.u-btn:disabled{opacity:.5;cursor:not-allowed}.u-btn:not([disabled]):after{content:\"\";position:absolute;width:0;height:0;top:50%;left:50%;top:var(--mouse-y);left:var(--mouse-x);transform-style:flat;transform:translate3d(-50%,-50%,0);background:#ffffff1a;border-radius:100%;transition:width .2s ease,height .2s ease}.u-btn:not([disabled]):active:after{width:var(--wave-size);height:var(--wave-size)}.u-btn--basic{color:#fff}.u-btn--basic-primary{background-color:#1e4391}.u-btn--basic-primary:hover{background-color:#0f2b5e}.u-btn--basic-danger{background-color:#ef302b}.u-btn--basic-danger:hover{background-color:#c0231f}.u-btn--basic-simple,.u-btn--basic-simple:hover{background-color:#d3d3d3}.u-btn--outlined{background-color:transparent}.u-btn--outlined-primary{border:2px solid #1E4391;color:#1e4391}.u-btn--outlined-primary:not([disabled]):hover{color:#fff;border-color:#0f2b5e;background-color:#0f2b5e}.u-btn--outlined-danger{border:2px solid #EF302B;color:#ef302b}.u-btn--outlined-danger:not([disabled]):hover{color:#fff;border-color:#c0231f;background-color:#c0231f}.u-btn--outlined-simple{border:2px solid #D3D3D3;color:#222}.u-btn--outlined-simple:not([disabled]):hover{background-color:#d3d3d3}\n"], dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'u-button', template: "<button #buttonElement\n        (mousemove)=\"onMouseMove($event)\"\n        [attr.disabled]=\"isDisabled\"\n        [ngStyle]=\"{\n            '--mouse-x': mouseX + 'px',\n            '--mouse-y': mouseY + 'px',\n            '--wave-size': waveSize + 'px'\n        }\"\n        class=\"u-btn\">\n    <ng-content></ng-content>\n</button>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\";@import\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap\";@import\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap\";*{font-family:Montserrat,sans-serif;margin:0;padding:0}ul{text-decoration:none;list-style-type:none}.u-btn{padding:15px 50px;box-shadow:0 0 12px -2px #00000080;border-radius:10px;border:none;font-weight:500;font-size:14px;white-space:nowrap;cursor:pointer;position:relative;transition:background-color .6s ease;overflow:hidden;width:100%}.u-btn:disabled{opacity:.5;cursor:not-allowed}.u-btn:not([disabled]):after{content:\"\";position:absolute;width:0;height:0;top:50%;left:50%;top:var(--mouse-y);left:var(--mouse-x);transform-style:flat;transform:translate3d(-50%,-50%,0);background:#ffffff1a;border-radius:100%;transition:width .2s ease,height .2s ease}.u-btn:not([disabled]):active:after{width:var(--wave-size);height:var(--wave-size)}.u-btn--basic{color:#fff}.u-btn--basic-primary{background-color:#1e4391}.u-btn--basic-primary:hover{background-color:#0f2b5e}.u-btn--basic-danger{background-color:#ef302b}.u-btn--basic-danger:hover{background-color:#c0231f}.u-btn--basic-simple,.u-btn--basic-simple:hover{background-color:#d3d3d3}.u-btn--outlined{background-color:transparent}.u-btn--outlined-primary{border:2px solid #1E4391;color:#1e4391}.u-btn--outlined-primary:not([disabled]):hover{color:#fff;border-color:#0f2b5e;background-color:#0f2b5e}.u-btn--outlined-danger{border:2px solid #EF302B;color:#ef302b}.u-btn--outlined-danger:not([disabled]):hover{color:#fff;border-color:#c0231f;background-color:#c0231f}.u-btn--outlined-simple{border:2px solid #D3D3D3;color:#222}.u-btn--outlined-simple:not([disabled]):hover{background-color:#d3d3d3}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], disabled: [{
                type: Input
            }], isDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], buttonElement: [{
                type: ViewChild,
                args: ['buttonElement']
            }] } });

class ButtonBasicDirective {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonBasicDirective, deps: [{ token: ButtonComponent }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.2", type: ButtonBasicDirective, selector: "[basic]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonBasicDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[basic]',
                }]
        }], ctorParameters: () => [{ type: ButtonComponent }, { type: i0.Renderer2 }] });

class ButtonOutlinedDirective {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonOutlinedDirective, deps: [{ token: ButtonComponent }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.2", type: ButtonOutlinedDirective, selector: "[outlined]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonOutlinedDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[outlined]',
                }]
        }], ctorParameters: () => [{ type: ButtonComponent }, { type: i0.Renderer2 }] });

class UButtonModule {
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

class UTabComponent {
    constructor() {
        this.activeTab = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UTabComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.2", type: UTabComponent, selector: "u-tab", inputs: { tabTitle: "tabTitle" }, ngImport: i0, template: "@if (activeTab) {\n    <div class=\"u-tab\">\n        <div class=\"u-tab__content\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n}\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\";@import\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap\";@import\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap\";*{font-family:Montserrat,sans-serif;margin:0;padding:0}ul{text-decoration:none;list-style-type:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'u-tab', template: "@if (activeTab) {\n    <div class=\"u-tab\">\n        <div class=\"u-tab__content\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n}\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\";@import\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap\";@import\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap\";*{font-family:Montserrat,sans-serif;margin:0;padding:0}ul{text-decoration:none;list-style-type:none}\n"] }]
        }], propDecorators: { tabTitle: [{
                type: Input
            }] } });

class TabContainerComponent {
    constructor() {
        this.tabs = new QueryList();
    }
    ngAfterContentInit() {
        const activeTabs = this.tabs.filter(tab => tab.activeTab);
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }
    selectTab(tab) {
        this.tabs.forEach(t => t.activeTab = false);
        tab.activeTab = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TabContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.2", type: TabContainerComponent, selector: "u-tab-container", queries: [{ propertyName: "tabs", predicate: UTabComponent }], ngImport: i0, template: "<ul class=\"u-tab__list\">\n    @for (tab of tabs; track tab) {\n        <li\n            (click)=\"selectTab(tab)\"\n            class=\"u-tab__item\"\n            [ngClass]=\"{\n                'u-tab__item--active': tab.activeTab\n            }\"\n        >\n            {{tab.tabTitle}}\n        </li>\n    }\n</ul>\n<ng-content></ng-content>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\";@import\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap\";@import\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap\";*{font-family:Montserrat,sans-serif;margin:0;padding:0}ul{text-decoration:none;list-style-type:none}.u-tab__list{display:flex;justify-content:space-around}.u-tab__item{text-align:center;cursor:pointer;color:#748ab9;width:100%}.u-tab__item:after{margin-top:10px;content:\"\";display:block;width:0;height:2px;background:#1e4391;transition:width .5s ease-in-out}.u-tab__item--active{color:#1e4391}.u-tab__item--active:after{width:100%}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TabContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'u-tab-container', template: "<ul class=\"u-tab__list\">\n    @for (tab of tabs; track tab) {\n        <li\n            (click)=\"selectTab(tab)\"\n            class=\"u-tab__item\"\n            [ngClass]=\"{\n                'u-tab__item--active': tab.activeTab\n            }\"\n        >\n            {{tab.tabTitle}}\n        </li>\n    }\n</ul>\n<ng-content></ng-content>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\";@import\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap\";@import\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap\";*{font-family:Montserrat,sans-serif;margin:0;padding:0}ul{text-decoration:none;list-style-type:none}.u-tab__list{display:flex;justify-content:space-around}.u-tab__item{text-align:center;cursor:pointer;color:#748ab9;width:100%}.u-tab__item:after{margin-top:10px;content:\"\";display:block;width:0;height:2px;background:#1e4391;transition:width .5s ease-in-out}.u-tab__item--active{color:#1e4391}.u-tab__item--active:after{width:100%}\n"] }]
        }], propDecorators: { tabs: [{
                type: ContentChildren,
                args: [UTabComponent]
            }] } });

class UTabContainerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UTabContainerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.2", ngImport: i0, type: UTabContainerModule, declarations: [TabContainerComponent], imports: [CommonModule], exports: [TabContainerComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UTabContainerModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UTabContainerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TabContainerComponent
                    ],
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        TabContainerComponent
                    ]
                }]
        }] });

class UTabModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UTabModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.2", ngImport: i0, type: UTabModule, declarations: [UTabComponent], imports: [CommonModule], exports: [UTabComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UTabModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UTabModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UTabComponent
                    ],
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        UTabComponent
                    ]
                }]
        }] });

class UInputComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: UInputComponent, selector: "u-input", ngImport: i0, template: "<div class=\"u-input\">\n    <input type=\"text\" id=\"name\" placeholder=\" \">\n    <label for=\"name\">\u0412\u0430\u0448\u0435 \u0438\u043C\u044F</label>\n</div>\n", styles: [".u-input{position:relative;margin:20px 0}.u-input input{border:2px solid #ccc;border-radius:16px;font-size:16px;padding:20px 10px 20px 25px;display:block;transition:border-color .3s;background-color:#fff;width:500px}.u-input input:focus{border-color:#007bff}.u-input label{position:absolute;top:35%;left:25px;cursor:text;font-size:16px;transition:all .3s;color:#999;background-color:#fff;padding:0 4px;margin-left:-4px}.u-input input:focus~label,.u-input input:not(:placeholder-shown)~label{top:-10px;left:20px;font-size:12px;color:#007bff}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'u-input', template: "<div class=\"u-input\">\n    <input type=\"text\" id=\"name\" placeholder=\" \">\n    <label for=\"name\">\u0412\u0430\u0448\u0435 \u0438\u043C\u044F</label>\n</div>\n", styles: [".u-input{position:relative;margin:20px 0}.u-input input{border:2px solid #ccc;border-radius:16px;font-size:16px;padding:20px 10px 20px 25px;display:block;transition:border-color .3s;background-color:#fff;width:500px}.u-input input:focus{border-color:#007bff}.u-input label{position:absolute;top:35%;left:25px;cursor:text;font-size:16px;transition:all .3s;color:#999;background-color:#fff;padding:0 4px;margin-left:-4px}.u-input input:focus~label,.u-input input:not(:placeholder-shown)~label{top:-10px;left:20px;font-size:12px;color:#007bff}\n"] }]
        }] });

class UInputModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.2", ngImport: i0, type: UInputModule, declarations: [UInputComponent], imports: [CommonModule], exports: [UInputComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UInputModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UInputComponent
                    ],
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        UInputComponent
                    ]
                }]
        }] });

class UrfuMaterialModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UrfuMaterialModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.2", ngImport: i0, type: UrfuMaterialModule, imports: [UButtonModule,
            UTabContainerModule,
            UTabModule,
            UInputModule], exports: [UButtonModule,
            UTabModule,
            UTabContainerModule,
            UInputModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UrfuMaterialModule, imports: [UButtonModule,
            UTabContainerModule,
            UTabModule,
            UInputModule, UButtonModule,
            UTabModule,
            UTabContainerModule,
            UInputModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UrfuMaterialModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        UButtonModule,
                        UTabContainerModule,
                        UTabModule,
                        UInputModule
                    ],
                    exports: [
                        UButtonModule,
                        UTabModule,
                        UTabContainerModule,
                        UInputModule,
                    ]
                }]
        }] });

class UIconComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: UIconComponent, selector: "u-icon", inputs: { name: "name" }, ngImport: i0, template: "<span [ngClass]=\"'icon-' + name\"></span>\n", styles: ["@font-face{font-family:Urfu Material Icons;src:url(data:font/woff2;base64,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) format(\"woff2\")}[class*=icon-]:before{display:inline-block;font-family:Urfu Material Icons,sans-serif;line-height:1;font-size:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-folders:before{content:\"\\e957\";color:#a7a7a7}.icon-unlink:before{content:\"\\e956\";color:#1e4391}.icon-active:before{content:\"\\e900\";color:#1e4391}.icon-application:before{content:\"\\e901\";color:#1e4391}.icon-attention:before{content:\"\\e902\";color:#ef302b}.icon-basket:before{content:\"\\e903\";color:#1e4391}.icon-block:before{content:\"\\e904\";color:#1e4391}.icon-briefcase:before{content:\"\\e905\";color:#1e4391}.icon-calculator:before{content:\"\\e906\";color:#1e4391}.icon-calendar:before{content:\"\\e907\";color:#1e4391}.icon-catalog:before{content:\"\\e908\";color:#1e4391}.icon-chat:before{content:\"\\e909\";color:#1e4391}.icon-check:before{content:\"\\e90a\";color:#3ba68c}.icon-clock:before{content:\"\\e90b\";color:#1e4391}.icon-cloud:before{content:\"\\e90c\";color:#1e4391}.icon-copy:before{content:\"\\e90d\";color:#1e4391}.icon-correct:before{content:\"\\e90e\";color:#1e4391}.icon-cross:before{content:\"\\e90f\";color:#ef302b}.icon-cup:before{content:\"\\e910\";color:#1e4391}.icon-directory:before{content:\"\\e911\";color:#1e4391}.icon-doc:before{content:\"\\e912\";color:#1e4391}.icon-document:before{content:\"\\e913\";color:#1e4391}.icon-documents:before{content:\"\\e914\";color:#1e4391}.icon-down:before{content:\"\\e915\";color:#1e4391}.icon-down-arrow:before{content:\"\\e916\";color:#1e4391}.icon-download:before{content:\"\\e917\";color:#1e4391}.icon-download-line:before{content:\"\\e918\";color:#1e4391}.icon-dropdown:before{content:\"\\e919\";color:#1e4391}.icon-dropdown-horizontal:before{content:\"\\e91a\";color:#1e4391}.icon-entrance:before{content:\"\\e91b\";color:#1e4391}.icon-extracurricular-activities:before{content:\"\\e91c\";color:#1e4391}.icon-filter:before{content:\"\\e91d\";color:#1e4391}.icon-filter-mobile:before{content:\"\\e91e\";color:#1e4391}.icon-folder:before{content:\"\\e91f\";color:#e98446}.icon-full-screen:before{content:\"\\e920\";color:#1e4391}.icon-hidden:before{content:\"\\e921\";color:#1e4391}.icon-home:before{content:\"\\e922\";color:#1e4391}.icon-img:before{content:\"\\e923\";color:#467be3}.icon-information:before{content:\"\\e924\";color:#1e4391}.icon-jpg:before{content:\"\\e925\";color:#467be3}.icon-left:before{content:\"\\e926\";color:#1e4391}.icon-left-arrow:before{content:\"\\e927\";color:#1e4391}.icon-letter:before{content:\"\\e928\";color:#1e4391}.icon-like:before{content:\"\\e929\";color:#1e4391}.icon-link:before{content:\"\\e92a\";color:#1e4391}.icon-list-view:before{content:\"\\e92b\";color:#7a7a7a}.icon-lk-role:before{content:\"\\e92c\";color:#1e4391}.icon-minus:before{content:\"\\e92d\";color:#1e4391}.icon-moderation:before{content:\"\\e92e\";color:#1e4391}.icon-news:before{content:\"\\e92f\";color:#1e4391}.icon-notify:before{content:\"\\e930\";color:#1e4391}.icon-ok:before{content:\"\\e931\";color:#1e4391}.icon-pdf:before{content:\"\\e932\";color:#ef302b}.icon-pencil:before{content:\"\\e933\";color:#1e4391}.icon-people:before{content:\"\\e934\";color:#1e4391}.icon-plus:before{content:\"\\e935\";color:#1e4391}.icon-png:before{content:\"\\e936\";color:#467be3}.icon-ppt:before{content:\"\\e937\";color:#e98446}.icon-question:before{content:\"\\e938\";color:#1e4391}.icon-rating:before{content:\"\\e939\";color:#1e4391}.icon-right:before{content:\"\\e93a\";color:#1e4391}.icon-right-arrow:before{content:\"\\e93b\";color:#1e4391}.icon-role:before{content:\"\\e93c\";color:#1e4391}.icon-save:before{content:\"\\e93d\";color:#1e4391}.icon-search:before{content:\"\\e93e\";color:#1e4391}.icon-setting:before{content:\"\\e93f\";color:#1e4391}.icon-settlement:before{content:\"\\e940\";color:#1e4391}.icon-sorting:before{content:\"\\e941\";color:#1e4391}.icon-star:before{content:\"\\e942\";color:#1e4391}.icon-star-top20:before{content:\"\\e943\";color:#147246}.icon-star-top50:before{content:\"\\e944\";color:#1e4391}.icon-submenu:before{content:\"\\e945\";color:#ef302b}.icon-svg:before{content:\"\\e946\";color:#a872bc}.icon-table-view:before{content:\"\\e947\";color:#1e4391}.icon-telephone:before{content:\"\\e948\";color:#1e4391}.icon-test-tube:before{content:\"\\e949\";color:#1e4391}.icon-top100:before{content:\"\\e94a\";color:#ef302b}.icon-top20:before{content:\"\\e94b\";color:#147246}.icon-top50:before{content:\"\\e94c\";color:#1e4391}.icon-union:before{content:\"\\e94d\";color:#1e4391}.icon-university:before{content:\"\\e94e\";color:#1e4391}.icon-up:before{content:\"\\e94f\";color:#1e4391}.icon-up-arrow:before{content:\"\\e950\";color:#1e4391}.icon-upload:before{content:\"\\e951\";color:#1e4391}.icon-user:before{content:\"\\e952\";color:#1e4391}.icon-warning:before{content:\"\\e953\";color:#ef302b}.icon-xls:before{content:\"\\e954\";color:#3ba68c}.icon-zip:before{content:\"\\e955\";color:#0987ae}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'u-icon', template: "<span [ngClass]=\"'icon-' + name\"></span>\n", styles: ["@font-face{font-family:Urfu Material Icons;src:url(data:font/woff2;base64,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) format(\"woff2\")}[class*=icon-]:before{display:inline-block;font-family:Urfu Material Icons,sans-serif;line-height:1;font-size:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-folders:before{content:\"\\e957\";color:#a7a7a7}.icon-unlink:before{content:\"\\e956\";color:#1e4391}.icon-active:before{content:\"\\e900\";color:#1e4391}.icon-application:before{content:\"\\e901\";color:#1e4391}.icon-attention:before{content:\"\\e902\";color:#ef302b}.icon-basket:before{content:\"\\e903\";color:#1e4391}.icon-block:before{content:\"\\e904\";color:#1e4391}.icon-briefcase:before{content:\"\\e905\";color:#1e4391}.icon-calculator:before{content:\"\\e906\";color:#1e4391}.icon-calendar:before{content:\"\\e907\";color:#1e4391}.icon-catalog:before{content:\"\\e908\";color:#1e4391}.icon-chat:before{content:\"\\e909\";color:#1e4391}.icon-check:before{content:\"\\e90a\";color:#3ba68c}.icon-clock:before{content:\"\\e90b\";color:#1e4391}.icon-cloud:before{content:\"\\e90c\";color:#1e4391}.icon-copy:before{content:\"\\e90d\";color:#1e4391}.icon-correct:before{content:\"\\e90e\";color:#1e4391}.icon-cross:before{content:\"\\e90f\";color:#ef302b}.icon-cup:before{content:\"\\e910\";color:#1e4391}.icon-directory:before{content:\"\\e911\";color:#1e4391}.icon-doc:before{content:\"\\e912\";color:#1e4391}.icon-document:before{content:\"\\e913\";color:#1e4391}.icon-documents:before{content:\"\\e914\";color:#1e4391}.icon-down:before{content:\"\\e915\";color:#1e4391}.icon-down-arrow:before{content:\"\\e916\";color:#1e4391}.icon-download:before{content:\"\\e917\";color:#1e4391}.icon-download-line:before{content:\"\\e918\";color:#1e4391}.icon-dropdown:before{content:\"\\e919\";color:#1e4391}.icon-dropdown-horizontal:before{content:\"\\e91a\";color:#1e4391}.icon-entrance:before{content:\"\\e91b\";color:#1e4391}.icon-extracurricular-activities:before{content:\"\\e91c\";color:#1e4391}.icon-filter:before{content:\"\\e91d\";color:#1e4391}.icon-filter-mobile:before{content:\"\\e91e\";color:#1e4391}.icon-folder:before{content:\"\\e91f\";color:#e98446}.icon-full-screen:before{content:\"\\e920\";color:#1e4391}.icon-hidden:before{content:\"\\e921\";color:#1e4391}.icon-home:before{content:\"\\e922\";color:#1e4391}.icon-img:before{content:\"\\e923\";color:#467be3}.icon-information:before{content:\"\\e924\";color:#1e4391}.icon-jpg:before{content:\"\\e925\";color:#467be3}.icon-left:before{content:\"\\e926\";color:#1e4391}.icon-left-arrow:before{content:\"\\e927\";color:#1e4391}.icon-letter:before{content:\"\\e928\";color:#1e4391}.icon-like:before{content:\"\\e929\";color:#1e4391}.icon-link:before{content:\"\\e92a\";color:#1e4391}.icon-list-view:before{content:\"\\e92b\";color:#7a7a7a}.icon-lk-role:before{content:\"\\e92c\";color:#1e4391}.icon-minus:before{content:\"\\e92d\";color:#1e4391}.icon-moderation:before{content:\"\\e92e\";color:#1e4391}.icon-news:before{content:\"\\e92f\";color:#1e4391}.icon-notify:before{content:\"\\e930\";color:#1e4391}.icon-ok:before{content:\"\\e931\";color:#1e4391}.icon-pdf:before{content:\"\\e932\";color:#ef302b}.icon-pencil:before{content:\"\\e933\";color:#1e4391}.icon-people:before{content:\"\\e934\";color:#1e4391}.icon-plus:before{content:\"\\e935\";color:#1e4391}.icon-png:before{content:\"\\e936\";color:#467be3}.icon-ppt:before{content:\"\\e937\";color:#e98446}.icon-question:before{content:\"\\e938\";color:#1e4391}.icon-rating:before{content:\"\\e939\";color:#1e4391}.icon-right:before{content:\"\\e93a\";color:#1e4391}.icon-right-arrow:before{content:\"\\e93b\";color:#1e4391}.icon-role:before{content:\"\\e93c\";color:#1e4391}.icon-save:before{content:\"\\e93d\";color:#1e4391}.icon-search:before{content:\"\\e93e\";color:#1e4391}.icon-setting:before{content:\"\\e93f\";color:#1e4391}.icon-settlement:before{content:\"\\e940\";color:#1e4391}.icon-sorting:before{content:\"\\e941\";color:#1e4391}.icon-star:before{content:\"\\e942\";color:#1e4391}.icon-star-top20:before{content:\"\\e943\";color:#147246}.icon-star-top50:before{content:\"\\e944\";color:#1e4391}.icon-submenu:before{content:\"\\e945\";color:#ef302b}.icon-svg:before{content:\"\\e946\";color:#a872bc}.icon-table-view:before{content:\"\\e947\";color:#1e4391}.icon-telephone:before{content:\"\\e948\";color:#1e4391}.icon-test-tube:before{content:\"\\e949\";color:#1e4391}.icon-top100:before{content:\"\\e94a\";color:#ef302b}.icon-top20:before{content:\"\\e94b\";color:#147246}.icon-top50:before{content:\"\\e94c\";color:#1e4391}.icon-union:before{content:\"\\e94d\";color:#1e4391}.icon-university:before{content:\"\\e94e\";color:#1e4391}.icon-up:before{content:\"\\e94f\";color:#1e4391}.icon-up-arrow:before{content:\"\\e950\";color:#1e4391}.icon-upload:before{content:\"\\e951\";color:#1e4391}.icon-user:before{content:\"\\e952\";color:#1e4391}.icon-warning:before{content:\"\\e953\";color:#ef302b}.icon-xls:before{content:\"\\e954\";color:#3ba68c}.icon-zip:before{content:\"\\e955\";color:#0987ae}\n"] }]
        }], propDecorators: { name: [{
                type: Input
            }] } });

class IconService {
    constructor(http) {
        this.http = http;
    }
    getSvgContent(name) {
        const path = `../../assets/icons/${name}.svg`;
        return this.http.get(path, { responseType: 'text' }).pipe(catchError(error => {
            console.error(`Error loading svg: ${name}`, error);
            return of('');
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: IconService, deps: [{ token: i1$1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: IconService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: IconService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.HttpClient }] });

class UIconModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.2", ngImport: i0, type: UIconModule, declarations: [UIconComponent], imports: [CommonModule,
            HttpClientModule], exports: [UIconComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UIconModule, providers: [
            IconService
        ], imports: [CommonModule,
            HttpClientModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: UIconModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UIconComponent
                    ],
                    imports: [
                        CommonModule,
                        HttpClientModule
                    ],
                    exports: [
                        UIconComponent
                    ],
                    providers: [
                        IconService
                    ]
                }]
        }] });

/*
 * Public API Surface of urfumaterial
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonBasicDirective, ButtonComponent, ButtonOutlinedDirective, TabContainerComponent, UButtonModule, UIconComponent, UIconModule, UInputComponent, UInputModule, UTabComponent, UTabContainerModule, UTabModule, UrfuMaterialModule, UrfumaterialComponent, UrfumaterialService };
//# sourceMappingURL=urfumaterial.mjs.map
