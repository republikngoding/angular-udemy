import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExcerciseModal } from '../excercise-modal';
import { TrainingService } from '../trainings/training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

  @Output() trainingStart = new EventEmitter<void>();
  exercises: ExcerciseModal[] = [];

  constructor(
    private trainingSrv: TrainingService
  ) { };

  ngOnInit(): void {
    this.exercises = this.trainingSrv.getAvailbleExcersices();
    console.log(this.exercises);


  }

  onStartTraining() {
    this.trainingStart.emit();
  }

}
