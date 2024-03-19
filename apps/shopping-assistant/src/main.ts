import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from "@angular/core";
import { ClientShellModule } from "@shopping-assistant/client-shell";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(ClientShellModule), provideAnimationsAsync()
  ]
}).catch((err) =>
  console.error(err)
);
