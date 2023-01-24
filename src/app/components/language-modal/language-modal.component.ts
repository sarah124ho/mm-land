import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-language-modal',
  templateUrl: './language-modal.component.html'
})
export class LanguageModalComponent implements OnInit {

  @Input('show') showSub = new BehaviorSubject<boolean>(false);
  @Output() onClose = new EventEmitter();
  @Output() onLanguageSelect = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onCloseClick(): void {
    this.onClose.emit();
  }

  onItemSelected(lang: string) : void {
    this.onLanguageSelect.emit(lang);
  }

}
