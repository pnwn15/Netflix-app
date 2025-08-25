import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slidebar.html',
  styleUrl: './slidebar.css',
})
export class Slidebar {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  }
  cards = [
    {
      id: 1,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/th/6/66/Wednesday_Netflix_series_poster.png',
    },
    {
      id: 2,
      imageUrl:
        'https://demonslayer-hinokami.sega.com/img/purchase/digital-deluxe.jpg',
    },
    {
      id: 3,
      imageUrl:
        'https://snworksceo.imgix.net/ttd/dd98cc9a-86ba-4ff5-8395-3084026f7efd.sized-1000x1000.jpg?w=1000&dpr=2',
    },
    {
      id: 4,
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/5e90e8679180dd053f86571c/1750982473091-8Z1N2014LT512R2JWY5M/DCN_TH22_Thumbnail-Vertical+%281%29.png',
    },
    {
      id: 5,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Bleachanime.png/250px-Bleachanime.png',
    },
    {
      id: 6,
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BNmQ5Zjg2ZTYtMGZmNC00M2Y3LTgwZGQtYmQ3NWI5MDdhZWNjXkEyXkFqcGc@._V1_.jpg',
    },
    {
      id: 7,
      imageUrl:
        'https://woottoncommonsense.com/wp-content/uploads/2022/01/0aaoasAoY0qsaJkbOH49tdQ64NY7FjPQ6EajK6s0-607x900.jpeg',
    },
    {
      id: 8,
      imageUrl:
        'https://snworksceo.imgix.net/ttd/dd98cc9a-86ba-4ff5-8395-3084026f7efd.sized-1000x1000.jpg?w=1000&dpr=2',
    },
    {
      id: 9,
      imageUrl:
        'https://snworksceo.imgix.net/ttd/dd98cc9a-86ba-4ff5-8395-3084026f7efd.sized-1000x1000.jpg?w=1000&dpr=2',
    },
  ];
}
