import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsectionApiService {

  constructor(private http: HttpClient) { }

  readonly inspectionAPIUrl = 'https://localhost:9001/api/v1';

  getInspectionList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/inspection')
  }
  addInspection(data: any) {
    return this.http.post(this.inspectionAPIUrl + "/inspection", data)
  }
  updateInspection(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIUrl + `/inspection/${id}`, data)
  }
  deleteInspection(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/inspection/${id}`)
  }

  //Inspection Types
  getInspectionTypesList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/inspectiontype')
  }
  addInspectionTypes(data: any) {
    return this.http.post(this.inspectionAPIUrl + "/inspectiontype", data)
  }
  updateInspectionTypes(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIUrl + `/inspectiontype/${id}`, data)
  }
  deleteInspectionTypes(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/inspectiontype/${id}`)
  }

  //Statuses
  getStatusList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/status')
  }
  addStatus(data: any) {
    return this.http.post(this.inspectionAPIUrl + "/status", data)
  }
  updateStatus(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIUrl + `/status/${id}`, data)
  }
  deleteStatus(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/status/${id}`)
  }
}
