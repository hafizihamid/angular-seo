import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title = 'contact component';


  constructor(
    private metaTagService: Meta,
    private titleService: Title
  ) {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      {
        // tslint:disable-next-line: max-line-length
        name: 'description', content: `contact description`
      }
    );
  }

  ngOnInit() {
  }

}
