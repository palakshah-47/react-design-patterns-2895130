import React, { useEffect, useState } from "react";
import axios from "axios";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const withEditableResource = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const respone = await axios.get(resourcePath);
        setOriginalData(respone.data);
        setData(respone.data);
      };

      fetchData();
    }, []);

    const onChange = (changes) => {
      setData({ ...data, ...changes });
    };

    const onSave = async () => {
      const response = await axios.post(resourcePath, { [resourceName]: data });
      setData(response.data);
      setOriginalData(response.data);
    };

    const onReset = () => {
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };
    return <Component {...props} {...resourceProps} />;
  };
};
