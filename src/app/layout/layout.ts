import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from '../share/navbar/navbar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule,Navbar],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
