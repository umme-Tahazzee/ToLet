export type PropertyFilters = {
  searchTerm?: string;
  city?: string;
  minPrice?: string;
  maxPrice?: string;
  bedroom?: string;
  bathroom?: string;
  categoryId?: string;
  status?: string;
  page?: string;
  limit?: string;
  sortBy?: string;
  sortOrder?: string;
}

export const getProperties = async (filters: PropertyFilters) => {
    const params = new URLSearchParams(
      Object.entries(filters).filter(([,v])=> v !== undefined && v !== "") as [string, string][]
  );

  const res = await fetch(`
     ${process.env.BACKEND_API_URL}/api/properties?${params.toString()}`,
       {cache : "no-cache"}
    )

    return res.json()
}

export const getCategories = async() =>{
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories/`,{
         cache : "no-cache"
    })
   
    const result = await res.json()
    console.log(result);
    
    return result
}