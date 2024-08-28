import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarouselimgComponent } from '../../components/carouselimg/carouselimg.component';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [ButtonComponent, FooterComponent, CarouselimgComponent],
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'] // Corrección: Cambiar styleUrl a styleUrls
})
export class InformationComponent { }
