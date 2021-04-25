/* eslint-disable no-return-await */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

export const useOne = callback => {
  useEffect(() => callback(), []);
};
