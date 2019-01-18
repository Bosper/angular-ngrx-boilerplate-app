import { Component, Input, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-extended-form',
  templateUrl: './extended-form.component.html',
  styleUrls: ['./extended-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtendedFormComponent implements OnInit, OnChanges {
  @Input() messages: any;
  @Input() formGroup: FormGroup;

  shared$: Observable<any[]>;

  constructor(private _cd: ChangeDetectorRef, private store: Store<any> ) {
    this.shared$ = this.store.pipe(select(state => state.reducer['shared'].radio_opt));
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this._cd.markForCheck();
  }

}
