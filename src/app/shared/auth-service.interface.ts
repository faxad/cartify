export interface IAuthService {
    login(): void;
    logout(): void;
    isLoggedIn(): boolean;
    isUserAdmin(): boolean;
}
