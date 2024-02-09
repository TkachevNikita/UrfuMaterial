import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class IconService {
    private http;
    constructor(http: HttpClient);
    getSvgContent(name: string): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IconService>;
}
