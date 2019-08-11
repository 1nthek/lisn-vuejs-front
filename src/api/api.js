import axios from 'axios'
// import router from '../router'

const domain  = 'http://localhost:8000'
const UNAUTHORIZED = 401

const request = {
  get(path) {
    console.log(domain + path);
    return axios.get(domain + path)
      .catch(({ response }) => {
        const { status } = response
        console.log('요기요!!!!!!!');
        
        console.log(response);
        
        if (status === Unauthorized)
          return console.log('권한 없음');
        throw Error(response)
      })
  },
  // post(path, data) {
  //   return axios.post(domain + path, data)
  // },
  // delete(path) {
  //   return axios.delete(domain + path)
  // },
  // put(path, data) {
  //   return axios.put(domain + path, data)
  // }
}

export const noteList = {
  fetch(user_id) {
    if (user_id){
      return request.get('/record/list?user_id=' + user_id).then(({ data }) => data.notes)
    }
  },
  destroy(note_id) {
    // return axios.delete(domain + '/record/note', { params: { note_id: note_id } })
    // return axios.delete(domain + '/record/note'+note_id);
    // return request.delete(`/lists/${id}`).then(({ data }) => data)
    var formData = new FormData();
    formData.append('note_id', note_id);
    console.log(formData);
    
    var data = new FormData();
    data.append('photo', 'tmptmp');
    axios.delete(domain + '/record/note', data)
      .then((res) => { this.result = res.data; })
      .catch((ex) => { console.log('사진업로드 실패', ex); });

    // return axios.delete(domain + '/record/note', formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
    //   .then((response) => {
    //     console.log("성공적");
        
    //     // 응답 처리
    //   })
    //   .catch((error) => {
    //     console.log('실폐');
        
    //     // 예외 처리
    //   })
    
  }
}

// axios.delete(URL, { params: { note_id: target.id } })

// export const setAuthInHeader = token => {
//   axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
// }

// const { token } = localStorage
// if (token) setAuthInHeader(token)

// export const auth = {
//   login (email, password) {
//     return request('post', '/login', { email, password })
//   }
// }
