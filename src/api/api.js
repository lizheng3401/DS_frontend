import axios from 'axios';


let host = 'http://api.deepsleeping.tech';

//login
export const login = params => { return axios.post(`api/Login/`, params)}

//reigster
export const register = parmas => { return axios.post(`/api/Register/`, parmas)}

// sleep data of personal
export const sleepPersonal = params => { return axios.get(`/api/DataDownload`, parmas)}

// the amount of people whose sleep is healthy last night
export const sleepPercent = params => { return axios.get(`/api/SleepPercent`, params)}

// the amount of people whose heart is healthy last night
export const heartPercent = params => { return axios.get(`/api/heartPercent`, params)}

// the amount of people whose breath is healthy last night
export const breathPercent = params => { return axios.get(`/api/breathPercent`, params)}

// the amount of people whose movement is healthy last night
export const movePercent = params => { return axios.get(`/api/movePercent`, params)}