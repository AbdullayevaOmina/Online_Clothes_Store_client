export interface GetProducts {
  limit: number;
  page: number;
  name?: string;
}

export interface ProductData {
  age_max: number;
  age_min: number;
  category_id: string;
  color: string;
  cost: number;
  count: number;
  description: string;
  discount: number;
  for_gender: string;
  image_url: any[];
  made_in: string;
  product_id: string;
  product_name: string;
  size: number;
}

export interface ProductsStore {
  dataAll: any[];
  productData: ProductData;
  isLoading: boolean;
  totalCount: number;
  getAll: (params: GetProducts) => Promise<any>;
  get: (id: string | undefined) => Promise<any>;
}

export interface Request {
  get_all: (params: GetProducts) => Promise<any>;
  get: (id: string | undefined) => Promise<any>;
}
