import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userParam: String;
  passwordParam: String;

  constructor(private routerActive: ActivatedRoute, private router: Router) {
    this.userParam = this.routerActive.snapshot.params['user'];
    this.passwordParam = this.routerActive.snapshot.params['password'];
  }

  redirectRegister() {
    this.router.navigate(['/register']);
  }


}
