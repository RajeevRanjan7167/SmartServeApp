import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smart Server App';

  constructor(public translate: TranslateService) {
    // translate.setDefaultLang('en');

    translate.addLangs(['English', 'Hindi', 'Bengali', 'Kannada', 'Malayalam', 'Tamil', 'Telugu']);
    translate.setDefaultLang('English');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/English|Hindi|Bengali|Kannada|Malayalam|Tamil|Telugu/) ? browserLang : 'English');
  }

}
