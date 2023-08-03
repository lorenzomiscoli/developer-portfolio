import { Component } from '@angular/core';
import { APP_DEPS } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [APP_DEPS],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'developer-portfolio';
}
