import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserInfo } from 'utils/storage';
import { isEmpty } from 'lodash';

const withAuth = WrappedComponent => props => {
  const history = useHistory();

  useEffect(() => {
    if (isEmpty(getUserInfo())) {
      history.push('/login');
    }
  }, [history]);

  return (
    <>
      <WrappedComponent {...props} />
    </>
  );
};

export default withAuth;
