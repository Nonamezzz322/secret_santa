/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useSelector, useDispatch } from 'react-redux';
import { clearError, clearMessage } from '../../redux/reducers/loadingReducer';

const MySwal = withReactContent(Swal);

export const useError = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.loading.errorMessage);
  useEffect(() => {
    if (errorMessage) {
      MySwal.fire({
        icon: 'error',
        title: errorMessage
      });
      dispatch(clearError());
    }
  }, [errorMessage]);
};

export const useSuccess = () => {
  const dispatch = useDispatch();
  const dataMessage = useSelector(state => state.loading.dataMessage);
  useEffect(() => {
    if (dataMessage) {
      MySwal.fire({
        icon: 'success',
        title: dataMessage
      });
      dispatch(clearMessage());
    }
  }, [dataMessage]);
};
