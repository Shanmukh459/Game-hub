import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "08b39ba463204793b3b46bdfb357e00b",
  },
})
