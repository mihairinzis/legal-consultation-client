import { IPageable, Pageable } from './pageable.model';

export interface IPageData {
  totalPages: number;
  totalElements: number;
  pageable: IPageable;
}

export class PageData {
  totalPages: number;
  totalElements: number;
  pageable: Pageable;

  fromPage(otherPage: Page<any>) {
    this.fromJson(otherPage as IPageData);
  }

  fromJson(json: IPageData) {
    this.totalElements = json.totalElements;
    this.totalPages = json.totalPages;
    this.pageable = new Pageable(json.pageable);
  }

  toJson(): IPageData {
    return {
      totalPages: this.totalPages,
      totalElements: this.totalElements,
      pageable: this.pageable.toJson(),
    } as IPageData;
  }
}

export class Page<T> extends PageData {
  content: T[];

  constructor(otherPage: Page<any>) {
    super();
    super.fromPage(otherPage);
    this.content = [];
  }
}
