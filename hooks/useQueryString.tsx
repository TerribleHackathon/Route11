import { useState, useEffect } from 'react';

const useQueryString = (key: string, value: string) => {
  const [isInUrl, setIsInUrl] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramValue = params.get(key);

    setIsInUrl(paramValue === value);
  }, [key, value]);

  return isInUrl;
};

export default useQueryString;