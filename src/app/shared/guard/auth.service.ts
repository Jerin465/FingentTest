import { Injectable } from '@angular/core';
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
}
