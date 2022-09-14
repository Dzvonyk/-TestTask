export type RevenueType = {
    _id: string;
    id: string;
  };

  export type GetRevenueListResponseType = RevenueType & {
    isActive: boolean;
    name: string;
    date: Date;
  };

  export type GetRevenueResponseType = RevenueType & {
    data: [{
        id:number;
        curency: number;
        date: Date;
    }];
  };
