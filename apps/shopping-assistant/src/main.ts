import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from "@angular/core";
import { ClientShellModule } from "@shopping-assistant/client-shell";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(ClientShellModule)
  ]
}).catch((err) =>
  console.error(err)
);
