import { useResource } from "./useResource";
import { useDataSource } from "./useDataSource";
import axios from "axios";

const serverResource = (resourceUrl) => async () => {
  try {
    const resp = await axios.get(resourceUrl);
    return resp.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const UserInfo = ({ userId }) => {
  //   const user = useResource(`/users/${userId}`);

  const user = useDataSource(serverResource(`/users/${userId}`));

  const { name, age, hairColor, hobbies } = user || {};

  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading...</p>
  );
};
