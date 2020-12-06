// import {Injectable} from "@angular/core";
// import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
// import {Observable} from "rxjs";
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import {TokenStorageService} from "./tokenstorage/TokenStorageService.service";
 
// const TOKEN_HEADER_KEY = 'Authorization';

// @Injectable({
//     providedIn: "root"
// })
// export class AuthInterceptorService implements HttpInterceptor{
//     constructor(private token: TokenStorageService) { }

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//         let authReq = req;
//         const token = this.token.getToken();
//         var formattoken = `Bearer ` + token;
//         if (token != null) {
//             //authReq = req.clone({ headers: req.headers.append(TOKEN_HEADER_KEY, 'Bearer ' + token) });
//             authReq = req.clone({ setHeaders: {
//                 Authorization: formattoken
//               } });
//         }

//         // if(localStorage.getItem("auth")!==null){
//         //     const  modifParam=req.clone({
//         //         headers:req.headers.append('Authorization',`Bearer ${JSON.parse(localStorage.getItem("auth")).jwt}`)
//         //     });

//         //     return next.handle(modifParam);
//         // }
//         return next.handle(authReq);
//     }

// }

// export const authInterceptorProviders = [
//     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
//   ];

import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(localStorage.getItem("auth")!==null){
            const  modifParam=req.clone({
                headers:req.headers.append('Authorization',`Bearer ${JSON.parse(localStorage.getItem("auth")).jwt}`)
            });

            return next.handle(modifParam);
        }
        return next.handle(req);
    }

}