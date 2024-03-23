import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const authservice = inject(AuthService)
  const route = inject(Router)
  if(authservice.isAuthticate()){
    return true;
  }else{
    route.navigate(['/login'])
    return false
  }
 
};
