import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from '../share/navbar/navbar';
import { Footer } from '../share/footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule,Navbar,Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
