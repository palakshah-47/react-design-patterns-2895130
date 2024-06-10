const isObject = (x) => typeof x === "object" && x !== null;

export const RecursiveComponent = ({ data }) => {
  if (!isObject(data)) {
    return <l1>{data}</l1>;
  }

  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, value]) => (
        <l1>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </l1>
      ))}
    </>
  );
};
