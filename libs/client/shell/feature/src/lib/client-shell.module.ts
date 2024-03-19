import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { clientShellRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(clientShellRoutes)],
})
export class ClientShellModule {
}
