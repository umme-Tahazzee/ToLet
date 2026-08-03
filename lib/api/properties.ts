

export type PropertySearchParams = {
      searchTerm ?: string
      city ?: string
      minPrice ?: string
      maxPrice ?: string
      bedroom ?: string
      bathRoom ?: string
      categoryId ?: String
      status ?: string
      sortBy ?: string
      sortOrder?: string
      page ?: string
}


export const getProperties  = async(searchParams :PropertySearchParams ) => {
    const params = new URLSearchParams();
    if(searchParams.searchTerm) {
         params.set("searchTerm", searchParams.searchTerm)
    }


    const res = await fetch(`${process.env.BACKEND_API_URL}/api/properties?${params.toString()}`)
    const result = await res.json()

    return result
}