import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, Request} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class CashRegisterService {
  constructor(private http: Http) {
  }

  //获取报表
  private mockUrl = 'assets/mock/cashregister.json';
  private mockUrl1 = 'assets/mock/cashregister1.json';
  private mockUrl2 = 'assets/mock/cashregister2.json';
  getCashRegister(): Promise<any[]> {
    let url = `${this.mockUrl}`;
    return this.http.get(url)
      .toPromise()
      .then(res => {
        return res.json();
      })
      .catch(this.handleError);
  }
  getCashAnnulReport(): Promise<any[]> {
    let url = `${this.mockUrl1}`;
    return this.http.get(url)
      .toPromise()
      .then(res => {
        return res.json();
      })
      .catch(this.handleError);
  }
  getCashMonthlyReport(): Promise<any[]> {
    let url = `${this.mockUrl2}`;
    return this.http.get(url)
      .toPromise()
      .then(res => {
        return res.json();
      })
      .catch(this.handleError);

  }
  //错误信息封装...目前是每一个service最下面面都有这句话
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error.status == 0) {
      errMsg = `亲~~ 请求未执行,1:服务未启动接口2:api地址错误|error`;
    } else if (error._body.substring(0, 1) == '{') {
      const err = JSON.parse(error._body).defaultMessage || '未知错误';
      if (error.status >= 500) {
        errMsg = `${error.status} ${error.statusText} ${err}|warn`;
      } else if (error.status == 403) {
        errMsg = `${error.status} ${error.statusText} ${err}|info`;
      } else {
        errMsg = `${error.status} ${error.statusText} ${err}|error`;
      }
    } else {
      if (error.status >= 500) {
        errMsg = `${error.status} ${error.statusText} 服务器超时|warn`;
      } else {
        errMsg = `${error.status} ${error.statusText} 服务器错误|error`;
      }
    }

    return Promise.reject(errMsg);
  }

}//class end
