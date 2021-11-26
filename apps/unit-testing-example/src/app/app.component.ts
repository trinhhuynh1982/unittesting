import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'unit-testing-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'unit-testing-example';

  constructor(public translate: TranslateService) {

  }

  ngOnInit(): void {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
  }

  useLanguage(): void {
    const newLang = this.translate.getLangs().find(item => item !== this.translate.currentLang);
    this.translate.use(newLang!);
  }
}
