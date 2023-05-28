export interface Headlines {
  articles: Articles[];
  status: boolean;
  totalResults: number;
}

export interface Articles {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  contentL: string;
}

export interface Source {
  id: string;
  name: string;
}

export interface ErrorMessage {
  message: string;
}
