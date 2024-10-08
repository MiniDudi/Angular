import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent {
  idParam: number;
  nameParam: String;
  constructor(private router: ActivatedRoute) {
    this.idParam = this.router.snapshot.params['id'];
    this.nameParam = this.router.snapshot.params['name'];
  }

}
