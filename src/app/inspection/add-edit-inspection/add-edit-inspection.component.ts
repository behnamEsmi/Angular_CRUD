import { Component,Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InsectionApiService } from 'src/app/insection-api.service';
import { AddInspectionFormValidator } from 'src/Validator/AddFormValidator'
import { UpdateInspectionFormValidator } from 'src/Validator/UpdateFormValidator'

@Component({
  selector: 'app-add-edit-inspection',
  templateUrl: './add-edit-inspection.component.html',
  styleUrls: ['./add-edit-inspection.component.css']
})
export class AddEditInspectionComponent implements OnInit {
  inspectionList$!:Observable<any[]>;
  statusList$!:Observable<any[]>;
  inspectionTypesList$!:Observable<any[]>;


  constructor(private service:InsectionApiService) { }


  @Input() inspection:any;
  id:number=0;
  status:string="";
  comments:string="";
  inspectionTypeId!:number;

  
  ngOnInit(): void {
    this.id=this.inspection.id;
    this.status=this.inspection.status;
    this.comments=this.inspection.comments;
    this.inspectionTypeId=this.inspection.inspectionTypeId;
    this.statusList$=this.service.getStatusList();
    this.inspectionList$=this.service.getInspectionList();
    this.inspectionTypesList$= this.service.getInspectionTypesList();
  }

  addInspection(){
    
    let inspection={
      status:this.status,
      comments:this.comments,
      inspectionTypeId:this.inspectionTypeId
    }
    let formValidator=new AddInspectionFormValidator();
    var validate= formValidator.validate(inspection)
    if (!Object.keys(validate).length) {
      this.service.addInspection(inspection).subscribe(res =>{
        var closeModalBtn= document.getElementById('add-edit-modal-close');
        if (closeModalBtn) {
          closeModalBtn.click();
        }
        var showAddSuccess=document.getElementById('add-success-alert');
        if (showAddSuccess) {
          showAddSuccess.style.display='block';
        }
  
        setTimeout(()=>{
          if (showAddSuccess) {
            showAddSuccess.style.display='none';
          }
        },4000)
      });
    }
    else{
      formValidator.showErrorValidator(validate)
    }

  }
  updateInspection(){
    let inspection={
      id:this.id,
      status:this.status,
      comments:this.comments,
      inspectionTypeId:this.inspectionTypeId
    }
    var id:number=this.id;
    let formValidator=new UpdateInspectionFormValidator();
    var validate= formValidator.validate(inspection)
    if (!Object.keys(validate).length) {
    this.service.updateInspection(id,inspection).subscribe(res =>{
      var closeModalBtn= document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      var showUpdateSuccess=document.getElementById('update-success-alert');
      if (showUpdateSuccess) {
        showUpdateSuccess.style.display='block';
      }

      setTimeout(()=>{
        if (showUpdateSuccess) {
          showUpdateSuccess.style.display='none';
        }
      },4000)
    });
    }
    else{
      formValidator.showErrorValidator(validate);
    }
  }


}
