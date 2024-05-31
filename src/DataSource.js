import React, { useState, useEffect } from "react";
import axios from "axios";

export const DataSource = ({
  getDataFunc = () => {},
  resourceName,
  children,
}) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataFunc();
      setState(data);
    };

    fetchData();
  }, [getDataFunc]);

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
