// types/index.ts e ei part update koro

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  city: string;
  address: string;
  bedroom: number;
  bathroom: number;
  images: string[];
  status: "AVAILABLE" | "RENTED";
  categoryId: string;
  category?: string;
  landlordId: string;
  landlord?: {
    id: string;
    name: string;
    email: string;
  };
  createdAt: string;
}

export interface PaginatedMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}