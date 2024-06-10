import { useState, useEffect } from "react";
import axios from "axios";

export const useDataSource = (getResourceFunc) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getResourceFunc();
      setResource(result);
    };

    fetchData();
  }, [getResourceFunc]);

  return resource;
};
