import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import { Observable } from "rxjs";

export class AuthGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return undefined;
    }

}
