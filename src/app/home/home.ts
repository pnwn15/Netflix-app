import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slidebar } from '../share/slidebar/slidebar';
import { Card } from '../share/card/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Slidebar, Card],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {  // <-- implement
  @ViewChild('bgAudio') bgAudio!: ElementRef<HTMLAudioElement>;
  carouselImages = [
    '/Demon.mp4',
  ];

  accordionItems = [
    {
      title: 'What is Netflix',
      content: `Netflix is a streaming service that offers a wide variety of
      award-winning TV shows, movies, anime, documentaries, and more on thousands
      of internet-connected devices. You can watch as much as you want, whenever
      you want without a single commercial – all for one low monthly price. There's
      always something new to discover and new TV shows and movies are added every week!`
    },
    {
      title: 'How much does Netflix cost?',
      content: `Watch Netflix on your smartphone, tablet, Smart TV, laptop,
      or streaming device, all for one fixed monthly fee. Plans range from THB 99 to THB 419 a month.
      No extra costs, no contracts.`
    },
    {
      title: 'Where Can I Watch',
      content: `Watch anywhere, anytime. Sign in with your Netflix account
      to watch instantly on the web at netflix.com from your personal computer
      or on any internet-connected device that offers the Netflix app, including
      smart TVs, smartphones, tablets, streaming media players and game consoles.
      You can also download your favorite shows with the iOS or Android app.`
    }
  ];

  audio!: HTMLAudioElement;

  // method ต้องตรงชื่อ AfterViewInit
  ngAfterViewInit(): void {
  if (typeof window !== 'undefined') {
    this.audio = new Audio('/');
    this.audio.loop = true;
    this.audio.volume = 0.5;
    this.audio.muted = true;  // mute เพื่อ autoplay
    this.audio.play().catch(err => console.log('Autoplay blocked:', err));

    // หลังจากโหลดสักครู่ ลอง unmute (บาง browser อาจยังไม่เล่น)
    setTimeout(() => {
      this.audio.muted = false;
      this.audio.play().catch(() => console.log('Still blocked'));
    }, 1000);
  }
}

  
}
