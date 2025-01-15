import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';


import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers:
  [
  provideZoneChangeDetection({ eventCoalescing: true }), 
  provideRouter(routes), 
  provideHttpClient (withInterceptors([authInterceptor])),

  //toast animations, posibles errores
  provideAnimations (),
  
  provideToastr ({
    timeOut: 3000,
    positionClass: 'toast-bottom-center',
    preventDuplicates: true,
    easeTime: 0,
    progressBar: true,
  }),
  ]
};
