import { Component } from '@angular/core';
import { LoadingServiceService } from 'src/app/services/loading-service.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent {
  showSpinner: boolean = false;

  constructor(private lodingService: LoadingServiceService){}
  ngOnInit(): void {
    
    this.lodingService.isLoading.subscribe((loading: boolean)=>{
      this.showSpinner = loading;
      console.log(loading);
      
    })
  }
}
