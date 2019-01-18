import { 
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  SimpleChanges 
} from '@angular/core';
import { Router } from "@angular/router";

import { Store, select } from '@ngrx/store';
import { AppStateEXT } from './core/models/models';

//Rxjs
import { Observable, Subscriber, Observer } from 'rxjs';
import { getMessages } from './core/redux/form.actions';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnChanges, DoCheck {
  $messages: Observable<Object>;
  $lang: Observable<string>;
  param: Object = { value: 'NG' };

  // ToDo: i18n-iso-countries
  countries = [
    { displayName: "Poland", value: "polish", code: "pl", img: 'assets/svg/pl.png' },
    { displayName: "England", value: "english", code: "en", img: 'assets/svg/en.png' }
  ];

  constructor(
    private store: Store<any>,
    private _cd: ChangeDetectorRef,
    private translate: TranslateService,
    private _router: Router
  ) {
    this.$lang = this.store.pipe(select(state => state.reducer['language'].useLanguage));
    this.$lang.subscribe(lang => {
      //ToDo: Fix defaultLang is state
      this.store.dispatch(getMessages(lang));
      this.$messages = this.store.pipe(select(state => state.reducer['translations']));
      this.$messages.subscribe((messages: Object) => {
        this.configLang(messages, lang);
      });
    });

  }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) { }

  ngDoCheck() {
    this._cd.markForCheck();
  }

  private configLang(messages: Object, lang: string) {
    this.translate.setTranslation(lang, messages);
    this.translate.setDefaultLang('en');
    //  this.store.dispatch(setLanguage(this.translate.getDefaultLang()));
    this.translate.use(lang);
    console.log("default_lang: ", lang);
  }
}