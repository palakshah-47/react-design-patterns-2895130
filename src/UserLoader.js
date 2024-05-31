import React, { useState, useEffect } from "react";
import axios from "axios";
export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/users/${userId}`);
      console.log(response.data);
      setUser(response.data);
    };

    fetchData();
  }, [userId]);

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
