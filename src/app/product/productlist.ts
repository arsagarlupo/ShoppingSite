export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  brand: string;
  availabilityStatus: string;
  stock: number;
  images: string[];
}

export interface Tasks{
  id?: number;
  taskname:string;
  assignee:string;
  status:string;
}
