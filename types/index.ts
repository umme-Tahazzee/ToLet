export type IUser = {
  success: boolean;
  message: string;
  data: {
    profile: {
      id: string;
      name: string;
      email: string;
      role: string;
      phone : string;
      status : string;
      isDelete : boolean;
      createdAt: string;
      updatedAt: string;
      profile: {
        id: string;
        profilePhoto: string;
        bio: string | null;
        userId: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};




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