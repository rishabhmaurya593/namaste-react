import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <>
      <h1>This is about page</h1>
      <User name={"Rishabh Maurya (function)"} />  {/* this is functional component */}
      <UserClass name={"Rishabh Maurya (class)"} location={"Pune"} /> {/* this is class based component */}
    </>
  );
};

export default About;
