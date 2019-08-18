import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {

  public homePath = 'home';
  public loginPath = 'login';
  public registerPath = 'register';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public isActive(page: string) {
    return this.router.isActive(page, true);
  }

  public navigate(page: string) {
    this.router.navigate([page]);
  }

}
