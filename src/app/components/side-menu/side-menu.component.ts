import { Component, OnInit } from '@angular/core';
import { Articles } from 'src/app/service/news';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  pageSize = 5;
  articles: Articles[] = [];

  constructor(private news: NewsService) {}
  ngOnInit(): void {
    this.getHeadlines();
  }

  /**
   * Function to get news headline articles
   * @returns { void }
   */
  getHeadlines(): void {
    this.news
      .getTopHeadlines(this.pageSize)
      .toPromise()
      .then(
        (results: any) => {
          this.articles = results.articles;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
