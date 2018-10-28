import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router, Event, NavigationEnd } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class NhbService {
    public url = environment.apiUrl;

    constructor(private http: Http, private router: Router) {
    }

    getNftMetadataBySerialnumber() {
        return this.http
            .get(`${this.url}api/test/123456`)
            .timeout(20000)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    handleError(error: any) {
        console.error(error);
        return Observable.throw(error);
    }
}