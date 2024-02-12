import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { APIResponseModel } from 'src/app/model/api-model';
import { ValentineApiService } from 'src/app/services/valentine-api.service';

@Component({
  selector: 'app-part-two',
  templateUrl: './part-two.component.html',
  styleUrls: ['./part-two.component.scss']
})
export class PartTwoComponent {

  imageUrl: string | ArrayBuffer | null = null;
  romanticMessage: string | null = null; // Variable to store the romantic message

  errorMessage: string | null = null;
  predictionLabel: string | null = null;
  
  private inputedFile: File | undefined;

  constructor(private apiService: ValentineApiService) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.inputedFile = file;
    }
  }
  
  onSubmit() {
    console.log('File:', this.inputedFile);
    if (this.inputedFile==undefined) {
      this.errorMessage = 'Please select a file before submitting.'
    }else{
      this.uploadImage(this.inputedFile!);
    }
  }


  uploadImage(imageFile: File) {
    this.apiService.uploadImage(imageFile).subscribe(
      (response: APIResponseModel) => {
        this.romanticMessage = null;
        this.errorMessage = null;
        this.imageUrl = null;
        console.log('API Response:', response);
        this.imageUrl = response.imageUrl;
        if(response.predictionLabel != null){
          this.romanticMessage = response.msg;
          this.predictionLabel = response.predictionLabel;
        }else{
          this.errorMessage = response.msg

        }
        // Handle response here
      },
      (error: HttpErrorResponse) => {
        console.error('API Error:', error);
        if (error.error.msg) {
          this.errorMessage = error.error.msg;
        }else{
          this.errorMessage = error.message;

        }

      }
    );
  }


}
