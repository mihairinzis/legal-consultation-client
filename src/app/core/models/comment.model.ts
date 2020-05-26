export interface IComment {
  id: string;
  text: string;
}

export class Comment {
  id: string;
  text: string;

  constructor(data?: IComment) {
    if (data) {
      this.fromJson(data);
    }
  }

  fromJson(data: IComment) {
    this.id = data.id;
    this.text = data.text;
  }

  toJson(): IComment {
    return {
      id: this.id,
      text: this.text
    };
  }
}
