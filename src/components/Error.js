import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();

  console.log(err);
  return (
    <>
      <h1>This is error page!</h1>
      <h3>{err.status}</h3>
      {/* <h4>{err.error.stack}</h4> */}
    </>
  );
};

export default Error;
