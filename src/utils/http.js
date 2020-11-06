/**
 * @Date:   2019-01-21T13:34:42+08:00
 * @Last modified time: 2019-10-24T11:27:10+08:00
 */
import axios from "axios";
// axios 配置
import { getLocal } from "./store"
axios.defaults.timeout = 300000;
axios.defaults.baseURL = "http://www.himynf.com:8080/mynfthree";
axios.interceptors.request.use(
    config => {
        //获取储存在本地的token值
        let authToken = getLocal("userData");
        // 这边可根据自己的需求设置headers，我司采用basic基本认证
        if (authToken === null) {
          config.headers["Content-Type"] = "application/x-www-form-urlencoded";
        } else {
          config.headers.Authorization = `Bearer ` + authToken.token;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

//http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        console.log(err);
        return Promise.reject(err);
    }
);

export default axios;
