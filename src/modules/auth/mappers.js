import get from 'lodash/get';

export const Profile = (item) => {
  const firstName = get(item, 'user_info.first_name') || '';
  const lastName = get(item, 'user_info.last_name') || '';

  return {
    id: get(item, 'user_info.id') || '',
    firstName,
    lastName,
    middleName: get(item, 'user_info.middle_name') || '',
    fullName: `${firstName} ${lastName}`
  };
};

export const Tokens = (item) => ({
  accessToken: get(item, 'access_token') || '',
  refreshToken: get(item, 'refresh_token') || ''
});
