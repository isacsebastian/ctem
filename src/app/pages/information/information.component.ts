import { Component } from '@angular/core';
import { HeadComponent } from '../../components/head/head.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Button2Component } from '../../components/button2/button2.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [HeadComponent, ButtonComponent, Button2Component, FooterComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {

}
