import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training-component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() trainingExit = new EventEmitter();
  progrees = 0;
  timer?: number | any;


  constructor(
    private dialog: MatDialog
  ) { };

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.progrees = this.progrees + 5;
      if (this.progrees >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  startOrResumeTimer() {
    this.timer = setInterval(() => {
      this.progrees = this.progrees + 5;
      if (this.progrees >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  resetTimer() {
    this.progrees = 0;
    clearInterval(this.timer);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef =
      this.dialog.open(StopTrainingComponent, { data: { progrees: this.progrees } });
    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);

      if (result) {
        this.trainingExit.emit();
      } else {
        this.startOrResumeTimer();
      }
    })
  }
}
