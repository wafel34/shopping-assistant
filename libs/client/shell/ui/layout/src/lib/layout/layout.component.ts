import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar } from "@angular/material/toolbar";

@Component({
  selector: 'shopping-assistant-layout',
  standalone: true,
  imports: [CommonModule, MatToolbar],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
