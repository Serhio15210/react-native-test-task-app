import axios from 'axios'
export const useAxios = () => {


  axios.interceptors.response.use((response) => response, (error) => {
    return Promise.reject(error)
  })
  axios.defaults.baseURL = process.env.BASE_URL
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
  axios.defaults.headers.post['Authorization'] = 'application/json'
  return axios
}
