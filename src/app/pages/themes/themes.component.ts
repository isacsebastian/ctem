import { Component } from '@angular/core';
import { HeadComponent } from '../../components/head/head.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [HeadComponent, FooterComponent, ButtonComponent],
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent { }


