import { Component, OnInit } from '@angular/core';
import {MyService} from '../Services/my-service.service'

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {

  jobData:any = [];
  public favdata:any = [];
  fdata:any;
  constructor(private myService:MyService) { }
  

  ngOnInit() {
    this.myService.GetData().subscribe(
      (data)=>{
        this.jobData = data;
        console.log(this.jobData); 
      }
    );
  }
  Fav(){
    (fdata)=>{
      this.jobData = fdata;

    }
    this.favdata = this.fdata;
   }
  
}

