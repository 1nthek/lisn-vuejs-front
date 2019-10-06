import axios from 'axios'
import router from '../router'
// import {store} from '../store/store'

const domain = "http://54.180.86.133/api";
const Unauthorized = 401
const onUnauthorized = () => {
  // store.state.token = null;
  // store.state.user_id = null;
  delete localStorage.token;
  delete localStorage.user_id;
  router.replace('/');
}

const request = (method, url, data) => {
  return axios({
    method,
    url: domain + url,
    data
  }).then(result => result.data)
    .catch(result => {
      const { status } = result.response
      if (status == Unauthorized) onUnauthorized()
      throw result.response
    })
}

export const setTokenInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
}

export const list = {
  fetch(user_id) {
    return request('get', `/list/note/all?user_id=${user_id}`)
  },
  // create(title) {
  //   return request('post', '/boards', { title })
  // },
  // update(id, payload) {
  //   return request('put', `/boards/${id}`, payload)
  // },
  // destroy(id) {
  //   return request('delete', `/boards/${id}`)
  // }
}

export const note = {
  fetch(note_id){
    return request('get', `/note?note_id=${note_id}`)
  },
  create(formData){
    return request('post', `/note`, formData);
  }
}

export const directory = {
  fetch(user_id) {
    return request('get', `/list/directory?user_id=${user_id}`)
  },
}

export const auth = {
  login(google_token) {
    return request.post('/login', google_token)
  }
}
