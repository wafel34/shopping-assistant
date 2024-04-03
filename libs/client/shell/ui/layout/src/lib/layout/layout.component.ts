import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { collection, collectionData, Firestore } from "@angular/fire/firestore";

@Component({
  selector: 'shopping-assistant-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'lists')
    collectionData(itemCollection).subscribe(console.log)
  }
}
