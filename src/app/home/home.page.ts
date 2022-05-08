import { Component, OnInit, } from '@angular/core';
import { AllPage } from '../all/all.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  favArray:any = [];
  constructor() { }

  ngOnInit() {
    
  }
  
  
}
