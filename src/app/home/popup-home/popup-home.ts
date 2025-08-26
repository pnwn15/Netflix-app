import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-popup-home',
  standalone: true,
  imports: [MatDialogModule,CommonModule],
  templateUrl: './popup-home.html',
  styleUrl: './popup-home.css'
})
export class PopupHome {
constructor(
  @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('Received data:', data);
  }
}
