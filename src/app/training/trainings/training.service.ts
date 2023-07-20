import { Injectable } from '@angular/core';
import { ExcerciseModal } from '../excercise-modal';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  private availbleExerCise: ExcerciseModal[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 9 }
  ];

  constructor() { }

  getAvailbleExcersices() {
    return this.availbleExerCise.slice();
  }
}
