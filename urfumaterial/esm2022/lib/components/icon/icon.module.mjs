import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { UIconComponent } from "./icon.component";
import { HttpClientModule } from "@angular/common/http";
import { IconService } from "./icon.serivce";
import * as i0 from "@angular/core";
export class UIconModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cmZ1bWF0ZXJpYWwvc3JjL2xpYi9jb21wb25lbnRzL2ljb24vaWNvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFpQjNDLE1BQU0sT0FBTyxXQUFXOzhHQUFYLFdBQVc7K0dBQVgsV0FBVyxpQkFiaEIsY0FBYyxhQUdkLFlBQVk7WUFDWixnQkFBZ0IsYUFHaEIsY0FBYzsrR0FNVCxXQUFXLGFBSlQ7WUFDUCxXQUFXO1NBQ2QsWUFSRyxZQUFZO1lBQ1osZ0JBQWdCOzsyRkFTWCxXQUFXO2tCQWZ2QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixjQUFjO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixnQkFBZ0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDTCxjQUFjO3FCQUNqQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1AsV0FBVztxQkFDZDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtVSWNvbkNvbXBvbmVudH0gZnJvbSBcIi4vaWNvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge0ljb25TZXJ2aWNlfSBmcm9tIFwiLi9pY29uLnNlcml2Y2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVUljb25Db21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFVJY29uQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSWNvblNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFVJY29uTW9kdWxlIHt9XG4iXX0=