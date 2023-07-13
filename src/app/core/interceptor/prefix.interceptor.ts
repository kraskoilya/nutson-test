import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@nutson-test/environment';
import { Observable } from 'rxjs';

@Injectable()
export class PrefixInterceptor implements HttpInterceptor {
  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Ignore absolute URL
    if (
      request.url.startsWith('http://') ||
      request.url.startsWith('https://')
    ) {
      return next.handle(request);
    }

    const url = environment.ApiUrl;

    const changedRequest = request.clone({
      url: url + request.url,
    });

    return next.handle(changedRequest);
  }
}
