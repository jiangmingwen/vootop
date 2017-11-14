import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public snackBar: MatSnackBar) { }
    canActivate(ars: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let rgt = ars.data.auth;
        if (rgt < 3) {
            this.snackBar.open('没有权限',null, {
                duration: 2000,
              });
            return false;
        } else {
            return true;
        }
    }
}