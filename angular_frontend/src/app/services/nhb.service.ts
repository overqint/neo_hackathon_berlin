import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router, Event, NavigationEnd } from '@angular/router';
import { environment } from '../../environments/environment';

export interface RegisterResponseData {
    msg: string;
}

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

    registerNftEngine(payload) {
        return this.http
            .post(
                `${this.url}api/register`,
                JSON.stringify(payload),
                this.getContenType()
            )
            .timeout(20000)
            .map((response: Response) => {
                const data = response.json();
                const result = <RegisterResponseData>data;
                return result;
            })
            .catch(this.handleError);
    }

    handleError(error: any) {
        console.error(error);
        return Observable.throw(error);
    }

    getContenType() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return options;
    }
}