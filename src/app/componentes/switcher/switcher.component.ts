import { Component } from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrl: './switcher.component.scss',
})
export class SwitcherComponent {
  current: string;
  languages: string[];
  
  constructor(private translocoService: TranslocoService) {
    this.current = this.translocoService.getActiveLang();
    const avaliableLangs = this.translocoService.getAvailableLangs();
    if(Array.isArray(avaliableLangs) && typeof avaliableLangs[0] == "string") {
      this.languages = avaliableLangs as string[];
    } else {
      this.languages = (avaliableLangs as {id: string; label: string}[]).map(lang => lang.id);
    }
  }

  onChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const langCode = target.value;

    this.translocoService.setActiveLang(langCode);
    this.current = langCode;
  }
}
