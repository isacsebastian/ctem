import { Component } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { CarouselimgComponent } from '../../components/carouselimg/carouselimg.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, CardsComponent, CarouselimgComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    constructor(private router: Router) {}
  
    navigateToOther() {
      this.router.navigate(['register']);
    }
}
