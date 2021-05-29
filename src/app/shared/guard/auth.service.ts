import { Injectable } from '@angular/core';
import { User } from './../../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
    public getToken(): string {
        return localStorage.getItem('isLoggedin');
    }
    public isAuthenticated(): boolean {
        if (this.getToken()) {
            return true;
        } else {
            return false;
        }
    }

    public isValidUser(user: User): boolean {
        if (user.username.toLowerCase() === 'fingent' && user.password === 'fingent') {
            return true;
        } else {
            return false;
        }
    }
}
