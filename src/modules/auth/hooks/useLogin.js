import { useHistory } from 'react-router';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import * as Actions from '../actions';
import * as Api from '../api';
import * as Mappers from '../mappers';

const useLogin = ({ values, options = {} }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return useQuery(
    ['auth', 'login', values, options],
    async () => {
      const { data } = await Api.Login({ values });

      return Mappers.Tokens(data && data.data);
    },
    {
      ...options,
      enabled: !!values,
      retry: false,
      refetchOnWindowFocus: false,
      onSuccess: tokens => {
        history.push('/');
        dispatch(Actions.Login.request({ tokens }));
      }
    }
  );
};

export default useLogin;
