export interface IExample {
  id: number;
  fileName: string;
  originalName: string;
  size: number;
  mimetype: string;
  type: string;
  created_at: Date;
}

export interface IPrice {
  id: number;
  name: string;
  description: string;
  price: number;
  type: string;
}

export interface IPriceImgs {
  id: number;
  fileName: string;
  originalName: string;
  size: number;
  mimetype: string;
  type: string;
  created_at: Date;
}

export interface IPriceAndImgs {
  prices: IPrice[];
}
