import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slidebar } from '../share/slidebar/slidebar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Slidebar],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {  // <-- implement
  @ViewChild('bgAudio') bgAudio!: ElementRef<HTMLAudioElement>;
  carouselImages = [
    '/carousel6.jpg',
    '/carousel6.jpg',
    '/carousel6.jpg'
  ];

  audio!: HTMLAudioElement;

  // method ต้องตรงชื่อ AfterViewInit
  ngAfterViewInit(): void {
  if (typeof window !== 'undefined') {
    this.audio = new Audio('/Rock1.mp3');
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
