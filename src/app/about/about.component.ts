import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title = 'about component';


  constructor(
    private metaTagService: Meta,
    private titleService: Title
  ) {

    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      {
        // tslint:disable-next-line: max-line-length
        name: 'description', content: `about description`
      }
    );
  }

  ngOnInit() {
  }

}
