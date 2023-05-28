import { Component } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { Articles } from 'src/app/service/news';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent {
  stories: Articles[] = [];
  more = false;
  page = 0;

  constructor(private news: NewsService) {}

  ngOnInit(): void {
    this.getHeadline();
  }

  /**
   * Function to load top news headline articles
   * @returns { void }
   */
  getHeadline(): void {
    this.news
      .getTopHeadlines(this.page)
      .toPromise()
      .then(
        (results: any) => {
          this.stories = results.articles;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
