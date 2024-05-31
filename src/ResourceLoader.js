import React, { useState, useEffect } from "react";
import axios from "axios";

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(resourceUrl);
      setState(response.data);
    };

    fetchData();
  }, [resourceUrl]);

  return (
    state && (
      <>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(children, { [resourceName]: state });
          }
          return child;
        })}
      </>
    )
  );
};
