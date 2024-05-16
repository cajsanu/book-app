import "../App.css";
import { Person } from "../components/Person";

export const Users = () => {
    return (
      <>
        <h1>Users</h1>
        <div className="people">
          <Person name="Cajsa" age={25} img={"IMG_Cajsa.jpg"} />
          <Person name="Alex" age={26} img={"IMG_Alex.jpg"} />
        </div>
      </>
    );
  };