import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PopupHome } from '../../home/popup-home/popup-home'; // ต้องเป็น standalone component
@Component({
  selector: 'app-slidebar',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
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
      imageUrl:'https://upload.wikimedia.org/wikipedia/th/6/66/Wednesday_Netflix_series_poster.png',
      title: 'Wednesday',
      buttonaction: ['2022','13+','Show','Action','Thrillers','Mysteries'],
      detail: 'Turned into a young boy by a sinister potion, teen sleuth Conan helps solve baffling crimes while tracking down the nefarious agents who poisoned him.'
    },
    {
      id: 2,
      imageUrl:'https://demonslayer-hinokami.sega.com/img/purchase/digital-deluxe.jpg',
      title: 'Demon Slayer',
      buttonaction: ['2022','13+','Show','Action','Thrillers','Mysteries'],
      detail: 'Turned into a young boy by a sinister potion, teen sleuth Conan helps solve baffling crimes while tracking down the nefarious agents who poisoned him.'
    },
    {
      id: 3,
      imageUrl:'https://snworksceo.imgix.net/ttd/dd98cc9a-86ba-4ff5-8395-3084026f7efd.sized-1000x1000.jpg?w=1000&dpr=2',
      title: 'Attck on titan',
      buttonaction: ['2022','13+','Show','Action','Thrillers','Mysteries'],
      detail: 'Turned into a young boy by a sinister potion, teen sleuth Conan helps solve baffling crimes while tracking down the nefarious agents who poisoned him.'
    },
    {
      id: 4,
      imageUrl:'https://images.squarespace-cdn.com/content/v1/5e90e8679180dd053f86571c/1750982473091-8Z1N2014LT512R2JWY5M/DCN_TH22_Thumbnail-Vertical+%281%29.png',
      title: 'Conan',
      buttonaction: ['2022','13+','Show','Action','Thrillers','Mysteries'],
      detail: 'Turned into a young boy by a sinister potion, teen sleuth Conan helps solve baffling crimes while tracking down the nefarious agents who poisoned him.'
    },
    {
      id: 5,
      imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Bleachanime.png/250px-Bleachanime.png',
      title: 'Bleach',
      buttonaction: ['2022','13+','Show','Action','Thrillers','Mysteries'],
      detail: 'Turned into a young boy by a sinister potion, teen sleuth Conan helps solve baffling crimes while tracking down the nefarious agents who poisoned him.'
    },
    {
      id: 6,
      imageUrl:'https://m.media-amazon.com/images/M/MV5BNmQ5Zjg2ZTYtMGZmNC00M2Y3LTgwZGQtYmQ3NWI5MDdhZWNjXkEyXkFqcGc@._V1_.jpg',
      title: 'Demon slayer SS4',
      buttonaction: ['2022','13+','Show','Action','Thrillers','Mysteries'],
      detail: 'Turned into a young boy by a sinister potion, teen sleuth Conan helps solve baffling crimes while tracking down the nefarious agents who poisoned him.'
    },
    {
      id: 7,
      imageUrl:'https://woottoncommonsense.com/wp-content/uploads/2022/01/0aaoasAoY0qsaJkbOH49tdQ64NY7FjPQ6EajK6s0-607x900.jpeg',
      title: 'Night Stackle',
      buttonaction: ['2022','13+','Show','Action','Thrillers','Mysteries'],
      detail: 'Turned into a young boy by a sinister potion, teen sleuth Conan helps solve baffling crimes while tracking down the nefarious agents who poisoned him.'
    },
    {
      id: 8,
      imageUrl:'https://snworksceo.imgix.net/ttd/dd98cc9a-86ba-4ff5-8395-3084026f7efd.sized-1000x1000.jpg?w=1000&dpr=2',
      title: 'Attck on tian ss2',
      buttonaction: ['2022','13+','Show','Action','Thrillers','Mysteries'],
      detail: 'Turned into a young boy by a sinister potion, teen sleuth Conan helps solve baffling crimes while tracking down the nefarious agents who poisoned him.'
    },
    {
      id: 9,
      imageUrl:'https://m.media-amazon.com/images/M/MV5BMjg2NmM0MTEtYWY2Yy00NmFlLTllNTMtMjVkZjEwMGVlNzdjXkEyXkFqcGc@._V1_.jpg',
      title: 'Stranger thing',
      buttonaction: ['2022','13+','Show','Action','Thrillers','Mysteries'],
      detail: 'Turned into a young boy by a sinister potion, teen sleuth Conan helps solve baffling crimes while tracking down the nefarious agents who poisoned him.'
    },
  ];

  constructor(public dialog: MatDialog) { }

 openDialog(card: any): void {
  this.dialog.open(PopupHome, {
    data: card, // 👈 ส่งข้อมูล card ไปให้ dialog
    width: '50vw',
    height: '70vh',
    maxWidth: '95vw',
    maxHeight: '90vh',
    panelClass: 'custom-dialog-container',
  });
}

}
