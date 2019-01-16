import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'My Todo App';
  logoImg = "https://vignette.wikia.nocookie.net/logopedia/images/f/f0/Washington_capitals_alternate_logo.gif/revision/latest?cb=20130929140614";

  constructor() { }

  ngOnInit() {
  }

}
