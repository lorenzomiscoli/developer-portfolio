import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './layouts/landing/landing.component';
import { AboutComponent } from './layouts/about/about.component';
import { ServicesComponent } from './layouts/services/services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, LandingComponent, AboutComponent, ServicesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'developer-portfolio';
}
