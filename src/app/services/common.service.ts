import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  addTodo$: Subject<any> = new Subject();
  updateTodo$: Subject<any> = new Subject();
  constructor() {}
}
