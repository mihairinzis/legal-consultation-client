import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'legal-consultation-client';
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'ro']);
    translate.setDefaultLang('ro');
    translate.use('ro');
  }
}
