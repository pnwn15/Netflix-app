import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
 cards = [
    {
      title: 'Enjoy on your TV',
      text: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
      icon: '/pc.png'
      
    },
    {
      title: 'Download your shows to watch offline',
      text: 'Save your favorites easily and always have something to watch.',
      icon: '/download.png'
    },
    {
      title: 'Watch everywhere',
      text: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
      icon: '/camera.png'
    },
    {
      title: 'Create profiles for kids',
      text: 'Send kids on adventures with their favorite characters in a space made just for them.',
      icon: '/face.png'
    }
  ];
}
