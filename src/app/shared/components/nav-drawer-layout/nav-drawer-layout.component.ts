import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-nav-drawer-layout',
  templateUrl: './nav-drawer-layout.component.html',
  styleUrls: ['./nav-drawer-layout.component.scss'],
})
export class NavDrawerLayoutComponent implements OnInit {

  @ViewChild('drawer')
  drawer: MatDrawer;

  isAuthenticated = false;
  profile: { id: number, username: string } = null;

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.drawer.toggle();
  }
}
