import React, { useState, useEffect } from "react";
import axios from "axios";

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/current-user");
      console.log(response.data);
      setUser(response.data);
    };

    fetchData();
  }, []);

  return (
    user && (
      <>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(children, { user });
          }
          return child;
        })}
      </>
      //  <>{user.name}</>
    )
  );
};
