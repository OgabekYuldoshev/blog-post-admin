import { action } from 'typesafe-actions';

import * as Constants from './constants.js';

export const Login = {
  request: (args) => action(Constants.LOGIN.REQUEST, args)
};

export const Profile = {
  request: (args) => action(Constants.PROFILE.REQUEST, args)
};

export const Logout = {
  request: () => action(Constants.LOGOUT.REQUEST),
  success: () => action(Constants.LOGOUT.SUCCESS)
};
