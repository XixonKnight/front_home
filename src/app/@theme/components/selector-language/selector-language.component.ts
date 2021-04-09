import { Component, OnInit } from '@angular/core';
import {TranslationService} from '../../../@core/i18n/translation.service';

interface LanguageFlag {
  lang: string;
  name: string;
  flag: string;
  active?: boolean;
}

@Component({
  selector: 'ngx-selector-language',
  templateUrl: './selector-language.component.html',
  styleUrls: ['./selector-language.component.scss'],
})
export class SelectorLanguageComponent implements OnInit {
  currentTheme = './assets/media/svg/flags/220-vietnam.svg';

  language: LanguageFlag;
  languages: LanguageFlag[] = [
    {
      lang: 'en',
      name: 'English',
      flag: './assets/media/svg/flags/226-united-states.svg',
    },
    {
      lang: 'vi',
      name: 'Vietnamese',
      flag: './assets/media/svg/flags/220-vietnam.svg',
    },
  ];

  constructor(
    private translationService: TranslationService,
  ) { }

  ngOnInit(): void {
  }

  setLanguageWithRefresh(lang) {
    this.setLanguage(lang);
    window.location.reload();
  }

  setLanguage(lang) {
    this.languages.forEach((language: LanguageFlag) => {
      if (language.lang === lang) {
        language.active = true;
        this.language = language;
      } else {
        language.active = false;
      }
    });
    this.translationService.setLanguage(lang);
  }

  setSelectedLanguage(): any {
    this.setLanguage(this.translationService.getSelectedLanguage());
  }

  changeTheme(themeName: string) {
    // this.themeService.changeTheme(themeName);
  }

}
