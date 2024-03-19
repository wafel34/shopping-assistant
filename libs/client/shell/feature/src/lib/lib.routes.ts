import { Route } from '@angular/router';
import { LayoutComponent } from "@shopping-assistant/layout";

export const clientShellRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: LayoutComponent }
];
