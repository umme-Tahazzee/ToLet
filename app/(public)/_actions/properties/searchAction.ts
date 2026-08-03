import { redirect } from "next/navigation"

export type SearchState = {
      success : boolean
      message : string
}

export const searchAction = (
    previousState  : SearchState,
    formData : FormData
) => {
    const searchTerm = formData.get("searchTerm") as string
    const params = new URLSearchParams()
    if(searchTerm){
        params.set('searchTerm', searchTerm)
    }

    redirect(`/properties?${params.toString()}`);
}