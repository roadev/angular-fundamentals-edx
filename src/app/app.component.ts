import { Component, OnInit, OnDestroy } from '@angular/core';
import { GitSearchService } from './git-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GitSearchService]
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

  title = 'app is functional!';
}
