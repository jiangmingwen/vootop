import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions, RequestOptionsArgs } from '@angular/http';

import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class BillHttpService {
    constructor(private http: Http) { }

    serviceConfig(url: string, method: string, data?: any): Observable<any> {
        let result;
        let baseApi = 'http://127.0.0.1:4200/';
        url = baseApi + url;
        let headers = new Headers({
            // 'Content-Type': 'application/json',
            // 'Param': 'no-cache',
            // 'If-Modefied-Since': '1997/1/1 05:00:00 GMT',
            // 'Cache-Control': 'no-cache'
        });
        switch (method.toUpperCase()) {
            case 'GET':
                let params: URLSearchParams = new URLSearchParams();
                if (data) {
                    if (typeof data === 'object') {
                        for (let key in data) {
                            if (typeof data[key] === 'string') {
                                params.set(key, data[key]);
                            } else {
                                params.set(key, JSON.stringify(data[key]));
                            }
                        }
                    } else {
                        throw ('Requestion Param is not object!')
                    }
                }
                let options: RequestOptionsArgs = new RequestOptions({
                    search: params,
                    headers: headers
                })
                result = this.http.get(url, options)
                    .map((res: Response) => res.json())
                    .catch(error => this.handleServerError(error));
                break;
            case 'POST':
                result = this.http.post(url, data, { headers: headers })
                    .map((res: Response) => res.json())
                    .catch(error => this.handleServerError(error));
                break;
        }
        return result;
    }

    private handleServerError(err: any): Observable<any> {
        console.log('error in service: ' + err);
        return Observable.throw(err);
    }
}