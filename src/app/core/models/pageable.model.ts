export interface IPageable {
  pageSize: number;
  pageNumber: number;
}

export class Pageable {
  pageSize: number;
  pageNumber: number;

  constructor(data: IPageable) {
    this.fromJson(data);
  }

  toJson(): IPageable {
    return {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
    } as IPageable;
  }

  fromJson(json: IPageable) {
    this.pageSize = json.pageSize;
    this.pageNumber = json.pageNumber;
  }
}
