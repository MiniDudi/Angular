import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Media } from './media';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {
  finalValue: number | undefined;

  onSubmit(form: NgForm) {
    const media: Media = new Media(form.value.ac1, form.value.ac2, form.value.af, form.value.ag);
    this.finalValue = (media.ac1 * 0.15) + (media.ac2 * 0.30) + (media.af * 0.45) + (media.ag * 0.10);
  }
}
