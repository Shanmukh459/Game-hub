import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

interface Genre {
  id: number
  name: string
}

interface FetchGenresResponse {
  count: number
  results: Genre[]
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setLoading(false)
        setGenres(res.data.results)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setLoading(false)
        setError(err.message)
      })
  }, [])

  return { genres, isLoading, error }
}

export default useGenres
