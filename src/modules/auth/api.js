
// import http from '../../services/http';

import axios from "axios"

export const Login = (data) =>
  axios.post(
    `/v1/oauth/login`,
    data,
  );

export const Profile = ({ accessToken }) =>
  axios.post(`/v1/oauth/check_token`, {
    token: accessToken
  });
