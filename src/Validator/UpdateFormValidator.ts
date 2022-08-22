import { Validator } from 'fluentvalidation-ts';

type UpdateInspectionFormModel={
    id:number,
    status:string,
    comments:string,
    inspectionTypeId:number
    }
    

export class UpdateInspectionFormValidator extends Validator<UpdateInspectionFormModel>{
    constructor(){
        super();
        this.ruleFor('id').notNull().withMessage('id can not be null')
        this.ruleFor('status').notNull().withMessage('status can not be null').notEmpty().withMessage('status can not be empty')
        this.ruleFor('comments').notNull().withMessage('comments can not be null').notEmpty().withMessage('comments can not be empty')
        this.ruleFor('inspectionTypeId').notNull().withMessage('inspectionTypeId can not be null')
    } 
    showErrorValidator(data:any){
        let array=Object.entries(data)
        var i=0;
        var j=1;
        array.forEach(x=>{
        alert(array[i][j]);
        i++
      });
    }
}

