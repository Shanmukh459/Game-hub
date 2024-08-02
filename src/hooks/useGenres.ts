import { useQuery } from "@tanstack/react-query"
import genres from "../data/genres"
import apiClient from "../services/api-client"
import { FetchResponse } from "./useData"
export interface Genre {
  id: number
  name: string
  image_background: string
}

// const useGenres = () => ({ data: genres, isLoading: false, error: null })

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
  })
}

export default useGenres
