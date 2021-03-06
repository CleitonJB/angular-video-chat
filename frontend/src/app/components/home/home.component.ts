import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import uuidv4 from 'uuid/dist/v4';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createNewRoom() {
    this.router.navigate([`/${uuidv4()}`]);
    console.log("New room was create!");
  }
}
