import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {

  public prefix = '';
  public dashboardPath = `${this.prefix}/dashboard`;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public navigateToDashboard() {
    this.router.navigate(['app/dashboard']);
  }
}
