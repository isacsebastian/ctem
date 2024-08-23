import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Button2Component } from '../../components/button2/button2.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarouselimgComponent } from '../../components/carouselimg/carouselimg.component';


@Component({
  selector: 'app-information',
  standalone: true,
  imports: [ButtonComponent, Button2Component, FooterComponent, CarouselimgComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {

}
