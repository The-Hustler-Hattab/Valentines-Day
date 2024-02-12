import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponseModel } from '../model/api-model';

export const  ApiConstants = {
  IMAGE_API_PATH: "/process-image",

}


@Injectable({
  providedIn: 'root'
})
export class ValentineApiService {
  private apiUrl = environment.rooturl;
  constructor(private http: HttpClient) { }


  uploadImage(imageFile: File): Observable<APIResponseModel> {
    const formData = new FormData();
    formData.append('image', imageFile);

    return this.http.post<APIResponseModel>(this.apiUrl+ApiConstants.IMAGE_API_PATH, formData);
  }

}
