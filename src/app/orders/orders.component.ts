import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlexModalService } from '../shared-components/flex-modal/flex-modal.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  orders: Array<any> = [];
  name = ''; 

  constructor(
    private router: Router,
    private flexModal: FlexModalService,
    private http: Http
  ) {
  }

  async ngOnInit() {
    this.loadItems();

  }

  loadItems() {
    this.orders = [{
      'pid': '1',
      'image': 'assets/sm_android.jpeg',
      'description': 'Android',
      'price': 150.00,
      'quantity': 2
    }, {
      'pid': '2',
      'image': 'assets/sm_iphone.jpeg',
      'description': 'IPhone',
      'price': 200.00,
      'quantity': 1
    }, {
      'pid': '3',
      'image': 'assets/sm_windows.jpeg',
      'description': 'Windows Phone',
      'price': 110.00,
      'quantity': 2
    }];
  }

  clear(index: number) {
    this.orders.splice(index, 1000000000);
  }

  addItem (item: string) {
    switch (item) {
      case 'android' :
      this.orders.unshift({
        'pid': '1',
        'image': 'assets/sm_android.jpeg',
        'description': 'Android',
        'price': 150.00,
        'quantity': 0
      });
      break;
      case 'iphone' :
      this.orders.unshift({
        'pid': '2',
        'image': 'assets/sm_iphone.jpeg',
        'description': 'IPhone',
        'price': 200.00,
        'quantity': 0
      });
      break;
      case 'windows' :
      this.orders.unshift({
        'pid': '3',
        'image': 'assets/sm_windows.jpeg',
        'description': 'Windows Phone',
        'price': 110.00,
        'quantity': 0
      });

    }
  }

  submit() {
    const commaIndex = this.name.indexOf(',');
    const firstName = (commaIndex, this.name.length);
    const lastName = (commaIndex, 0);
    const fullName = firstName + ' ' + lastName; 
    


  }

  delete(index: number) {
    this.orders.splice(index, 1);
  }


}
