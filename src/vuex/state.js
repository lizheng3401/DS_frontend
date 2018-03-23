import cookie from '../utils/cookie'

const userInfo = {
  name:cookie.getCookie('name')||'',
  token:cookie.getCookie('token')||''
}

const state = {
  breads: [],
  userInfo
};

export default state
