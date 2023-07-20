import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-stop-training',
  template: `<h1 mat-dialog-title> Are you sure ?</h1>
  <div mat-doialog-content>you already got {{passesData.progrees}} % </div>
  <div mat-dialog-actions>
  <button mat-button [mat-dialog-close]="true" >Yes </button>
   <button mat-button [mat-dialog-close]="false" >No </button>
   </div>`
})

export class StopTrainingComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public passesData: any) { };


}