import { useState, useEffect } from "react";
import axios from "axios";
export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/current-user");
        setUser(response.data);
      } catch (err) {
        throw new Error(err);
      }
    };

    fetchData();
  }, []);

  return user;
};
