import axios from 'axios'
import router from '../router'

// const domain = "http://15.164.232.194/api";

const domain = "https://lisn.ai/api";
const Unauthorized = 401
const onUnauthorized = () => {
  console.log('권한 없음!');
  
  delete localStorage.token;
  delete localStorage.user_id;
  router.replace('/home');
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
  fetch_shared(user_id) {
    return request('get', `/list/note/shared?user_id=${user_id}`)
  },
  fetch_directory(directory_id){
    return request('get', `/list/note?directory_id=${directory_id}`)
  },
  fetch_trash(user_id) {
    return request('get', `/list/note/trash?user_id=${user_id}`)
  }
}

export const note = {
  fetch(note_id){
    return request('get', `/note?note_id=${note_id}`)
  },
  create(formData){
    return request('post', `/note`, formData);
  },
  share(formData) {
    return request('post', `/note/shared`, formData);
  },
  unshare(formData) {
    return request('delete', `/note/shared`, formData);
  },
  update(formData) {
    return request('put', `/note`, formData)
  },
  destroy(formData){
    return request('put', `/note/trash`, formData);
  }
}

export const edit = {
  fetch(note_id) {
    return request('get', `/note/edited?note_id=${note_id}`)
  },
  update(formData) {
    return request('put', `/note/edited`, formData);
  },
  destroy(formData) {
    return request('delete', `/note/edited`, formData);
  }
}

export const audio = {
  fetch(audio_id){
    return request('get', `/note/audio?audio_id=${audio_id}`);
  },
  // create(formData){
  //   return request('post', `note/audio`, formData);
  // }
}

export const directory = {
  fetch(user_id) {
    return request('get', `/list/directory?user_id=${user_id}`)
  },
  create(formData) {
    return request('post', `/directory`, formData);
  },
  move(formData){
    return request('put', `/note/directory`, formData)
  },
  update(formData) {
    return request('put', `/directory`, formData)
  },
  destroy(formData) {
    return request('delete', `/directory`, formData);
  }
}

export const profile = {
  fetch(user_id){
    return request('get', `/profile?user_id=${user_id}`)
  }
}

export const usage = {
  fetch(user_id) {
    return request('get', `/profile/usage?user_id=${user_id}`)
  }
}

export const trash = {
  fetch(user_id){
    return request('get', `/list/note/trash?user_id=${user_id}`)
  },
  destroy(formData) {
    return request('delete', `/note`, formData);
  },
  restore(formData) {
    return request('delete', `/note/trash`, formData);
  }
}

export const contact = {
  create(formData) {
    return request('post', `/contact`, formData);
  },
}

export const auth = {
  login(google_token) {
    return request.post('/login', google_token)
  }
}
