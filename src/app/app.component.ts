import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, HeaderComponent],
  template: `
    <app-header></app-header>
    <main>
      <app-home></app-home>
    </main>
  `,
  styles: [],
})
export class AppComponent {
  title = 'fourtitudeasia-fe-test';
}
