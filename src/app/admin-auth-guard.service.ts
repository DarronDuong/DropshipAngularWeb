import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { map,switchMap } from 'rxjs/operators';
import { AppUser } from './models/app-user';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {

    return this.auth.appUser$.pipe(map(appUser => appUser.isAdmin) )}
}
