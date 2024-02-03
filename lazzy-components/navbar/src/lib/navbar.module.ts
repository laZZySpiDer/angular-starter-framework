import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MenuModule } from 'primeng/menu';
import { InputGroupModule } from 'primeng/inputgroup';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [CommonModule,MenuModule,InputGroupModule,ButtonModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule {}
