export const printPropsComp = (Component) => {
  return (props) => {
    console.log(props);
    return <Component {...props} />;
  };
};
