import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions, RequestOptionsArgs } from '@angular/http';

import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Global } from './Global';

@Injectable()
export class VootopHttpService {
    constructor(private http: Http) { }

    /**
     * @param url API Adress 
     * @param method HTTP method: GET | POST | DELETE | PUT | PATCH
     * @param data HTTP DATA
     */
    setHttp(url: string, method: string, data?: any): Observable<any> {
        let result;
        url = Global.APIServeAddress + url;
        let headers = new Headers({
            'Content-Type': 'application/json',
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
                result = this.http.post(url, JSON.stringify(data), { headers: headers })
                    .map((res: Response) => res.json())
                    .catch(error => this.handleServerError(error));
                break;
            case 'PUT':
                result = this.http.put(url, data, { headers: headers })
                    .map((res: Response) => res.json())
                    .catch(error => this.handleServerError(error));
                break;
            case 'DELETE':
                result = this.http.delete(url, { headers: headers })
                    .map((res: Response) => res.json())
                    .catch(error => this.handleServerError(error));
                break;
            case 'PATCH':
                result = this.http.patch(url, data, { headers: headers })
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