import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class IconService {
    constructor(private http: HttpClient) {}

    public getSvgContent(name: string): Observable<string> {
        const path = `../../assets/icons/${name}.svg`;
        return this.http.get(path, { responseType: 'text' }).pipe(
            catchError(error => {
                console.error(`Error loading svg: ${name}`, error);
                return of('');
            })
        );
    }
}
