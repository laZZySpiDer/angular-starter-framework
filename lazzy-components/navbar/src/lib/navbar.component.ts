import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

// INPUT ELEMENTS
  @Input() menuItems: MenuItem[] | undefined = [
    {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
    },
    {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash'
    }
];
@Input() showSearchBar: boolean = true;
@Input() showCart: boolean = true;


//OUTPUT ELEMENTS
@Output() showCartEvent = new EventEmitter();

showCartEventEmit($event:Event){
  this.showCartEvent.emit($event);
}
}
