export interface GetProducts {
  limit: number;
  page: number;
  name?: string;
}

export interface ProductsStore {
  dataAll: any[];
  productData: any[];
  isLoading: boolean;
  totalCount: number;
  getAll: (params: GetProducts) => Promise<any>;
  get: (id: string | undefined) => Promise<any>;
}

export interface Request {
  get_all: (params: GetProducts) => Promise<any>;
  get: (id: string | undefined) => Promise<any>;
}
