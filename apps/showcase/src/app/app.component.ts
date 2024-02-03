import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavbarModule } from 'lazzy-components/navbar';
import { FooterModule } from 'lazzy-components/footer';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,NavbarModule,FooterModule],
  selector: 'angular-starter-framework-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'showcase';
  menuItems = [
    {label: 'Our Products'},
    {label: 'Collections'},
    {label: 'Why Us'}
  ]


  cartBtnClicked($event:Event){
    console.log('CART BUTTON CLICKED');
  }
}
