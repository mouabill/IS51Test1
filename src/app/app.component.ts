import { Component, OnInit } from '@angular/core';
import { FlexModalService } from './shared-components/flex-modal/flex-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'final';
  aboutText = 'Created by Billy Moua';
  constructor(private flexModal: FlexModalService) {

  }

  ngOnInit() {
  }

  helper() {
    alert('Created by Billy Moua');
  }




}
