export type RevenueType = {
  _id: string;
  id: string;
};

export type CurencyType = {
  id: number;
  curency: number | string;
  date: Date;
};

export type GetRevenueListResponseType = RevenueType & {
  isActive: boolean;
  name: string;
  date: Date;
};

export type GetRevenueResponseType = RevenueType & {
  data: CurencyType[];
};
