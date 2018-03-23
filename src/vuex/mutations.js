 import cookie from '../utils/cookie'
 
 const mutations = {
  addBread(state, item){
    state.breads.push(item);
  },
  delBread(state){
    state.breads.pop();
  },
  setInfo(state) {
    state.userInfo = {
        name:cookie.getCookie('name'),
        token:cookie.getCookie('token')
    }
    console.log(state.userInfo);
},
};

 export default mutations
