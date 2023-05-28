import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NewsService } from './service/news.service';
import { ContainerRef } from 'ngx-infinite-scroll';
import { Articles } from './service/news';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // @ViewChild('scroll-container') container!: Element;
  articles: Articles[] = [];
  more = false;
  start = 1;
  pageSize = 10;
  articlesAsChunks: Articles[] = [];

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
          this.addItems(this.start, this.pageSize);
          console.log(this.articles);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  /**
   * Function to load specified number of articles
   * @param { number } index start index
   * @param { number } pageSize end index of the loaded data
   * @returns { void }
   */
  addItems(index: number, pageSize: number): void {
    for (let i = index; i < pageSize; ++i) {
      this.articlesAsChunks.push(this.articles[i]);
      console.log(this.articles);
    }
  }

  /**
   * Function to load articles on scroll
   * @returns { void }
   */
  onScroll(): void {
    this.start = this.pageSize;
    this.pageSize += this.pageSize;
    this.getHeadlines();
  }
}
