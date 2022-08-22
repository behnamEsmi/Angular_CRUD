import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsectionApiService {

  constructor(private http: HttpClient) { }

  readonly inspectionAPIUrl = 'http://localhost:8080/api';

  getInspectionList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/inspections')
  }
  addInspection(data: any) {
    return this.http.post(this.inspectionAPIUrl + "/inspections", data)
  }
  updateInspection(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIUrl + `/inspections/${id}`, data)
  }
  deleteInspection(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/inspections/${id}`)
  }

  //Inspection Types
  getInspectionTypesList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/inspectiontypes')
  }
  addInspectionTypes(data: any) {
    return this.http.post(this.inspectionAPIUrl + "/inspectiontypes", data)
  }
  updateInspectionTypes(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIUrl + `/inspectiontypes/${id}`, data)
  }
  deleteInspectionTypes(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/inspectiontypes/${id}`)
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
