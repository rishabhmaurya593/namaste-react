import User from "./User";
import UserClass from "./UserClass";
import { UserContext } from "../utils/userContext";

const About = () => {
  return (
    <>
      <h1>This is about page</h1>
      <UserContext.Consumer>
        {(data) => <h2 className="font-bold">This is {data.loggedInUser}</h2>}
      </UserContext.Consumer>
      <User name={"Rishabh Maurya (function)"} />  {/* this is functional component */}
      <UserClass name={"Rishabh Maurya (class)"} location={"Pune"} /> {/* this is class based component */}
    </>
  );
};

export default About;
