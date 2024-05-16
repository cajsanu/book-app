import pingReq from "../requests/pings";
import "../App.css";
import { Person } from "../components/Person";

const ping = await pingReq.getAll();
console.log(ping, "!!!");

export const HomePage = () => {
  return (
    <>
      <h1>Books</h1>
      <div className="people">
        <Person name="Cajsa" age={25} img={"IMG_Cajsa.jpg"} />
        <Person name="Alex" age={26} img={"IMG_Alex.jpg"} />
      </div>
    </>
  );
};
