import { CanActivateFn } from '@angular/router';

export const authoGuard: CanActivateFn = (route, state) => {
  return true;
};
