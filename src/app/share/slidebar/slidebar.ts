import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-slidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slidebar.html',
  styleUrl: './slidebar.css'
})
export class Slidebar {
cards = [
    { imageUrl: 'https://upload.wikimedia.org/wikipedia/th/6/66/Wednesday_Netflix_series_poster.png' },
    { imageUrl: 'https://demonslayer-hinokami.sega.com/img/purchase/digital-deluxe.jpg' },
    { imageUrl: 'https://snworksceo.imgix.net/ttd/dd98cc9a-86ba-4ff5-8395-3084026f7efd.sized-1000x1000.jpg?w=1000&dpr=2' }
  ];
}
