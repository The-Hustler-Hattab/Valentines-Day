import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { LoadingService } from '../services/loading-service.service';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private loadingSpinner: LoadingService, private router : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    this.loadingSpinner.show()
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        // Handle successful responses here
        if (event instanceof HttpResponse) {
          this.loadingSpinner.hide()

           
          
        }
      }),
      catchError((error) => {
        // Handle errors here
        if (error instanceof HttpErrorResponse) {
          console.error('HTTP error:', error);
          this.loadingSpinner.hide()
          // this.router.navigate(['/error'], {queryParams: {error: error.message}} )

        }
        return throwError(error); // Re-throw the error to propagate it
      }),
      
    );
  }




}
