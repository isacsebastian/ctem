import { Component } from '@angular/core';
import { Button2Component } from '../../components/button2/button2.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { CarouselimgComponent } from '../../components/carouselimg/carouselimg.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Button2Component, CardsComponent, CarouselimgComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
