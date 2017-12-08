export interface IAuthService {
    login(email: string, password: string): any;
    logout(): void;
    isLoggedIn(): boolean;
    isUserAdmin(): boolean;
}
