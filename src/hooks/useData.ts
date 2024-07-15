import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { AxiosRequestConfig, CanceledError } from "axios"

interface FetchResponse<T> {
  count: number
  results: T[]
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(
    () => {
      const controller = new AbortController()

      setLoading(true)
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setLoading(false)
          setData(res.data.results)
        })
        .catch((err) => {
          if (err instanceof CanceledError) return
          setLoading(false)
          setError(err.message)
        })
    },
    deps ? [...deps] : []
  )

  return { data, isLoading, error }
}

export default useData
