import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

// tslint:disable-next-line: ban-types
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-seo';

  constructor(
    private router: Router,
    private metaTagService: Meta,
    private titleService: Title
  ) {

    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      {
        // tslint:disable-next-line: max-line-length
        name: 'description', content: `angular-seo description`
      }
    );

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
}
