import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { clientShellRoutes } from './lib.routes';

console.log('client shell module imported')
@NgModule({
  imports: [CommonModule, RouterModule.forChild(clientShellRoutes)],
})
export class ClientShellModule {
}
