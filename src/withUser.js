import React, { useEffect, useState } from "react";
import axios from "axios";

export const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const respone = await axios.get(`/users/${userId}`);
        setUser(respone.data);
      };

      fetchData();
    }, []);

    return <Component {...props} user={user} />;
  };
};
