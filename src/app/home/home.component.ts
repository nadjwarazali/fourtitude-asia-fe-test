import { Component } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { ConnectFormComponent } from '../components/connect-form/connect-form.component';

@Component({
  selector: 'app-home',
  imports: [CardComponent, ConnectFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
