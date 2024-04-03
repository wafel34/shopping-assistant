import { importProvidersFrom, isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { clientShellRoutes } from './lib.routes';
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { connectFirestoreEmulator, getFirestore, provideFirestore } from "@angular/fire/firestore";

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(clientShellRoutes)],
  providers: [
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp({
        "projectId": "shopping-assistant-2dee7",
        "appId": "1:495643362914:web:908cddd3695c0bda7a733b",
        "storageBucket": "shopping-assistant-2dee7.appspot.com",
        "apiKey": "AIzaSyDgUf680JK_NF1BIXxMp7Q2-11mqeIFNfs",
        "authDomain": "shopping-assistant-2dee7.firebaseapp.com",
        "messagingSenderId": "495643362914",
        "measurementId": "G-QYE4QP2VW0"
      }))),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => {
      const firestore = getFirestore();

      if (isDevMode()) {
        connectFirestoreEmulator(firestore, 'localhost', 8080)
      }

      return firestore;
    }))
  ]
})
export class ClientShellModule {
}
