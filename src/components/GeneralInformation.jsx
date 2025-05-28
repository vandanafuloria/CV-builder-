import Button from "../ui/Button";
import Heading from "../ui/Heading";

export default function GeneralInformation() {
  return (
    <div className="gen-info">
      <Heading
        icon={<i className="fa-solid fa-user"></i>}
        heading={"General Information"}
      />
      <form>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input id="name" placeholder="Enter Your Name"></input>
        </fieldset>
        <fieldset>
          <label htmlFor="email">Name</label>
          <input id="email" placeholder="Enter Email"></input>
        </fieldset>
        <fieldset>
          <label htmlFor="phone">Name</label>
          <input id="phone" placeholder="Contact Number"></input>
        </fieldset>
        <fieldset>
          <label htmlFor="location">Name</label>
          <input id="location" placeholder="Enter City"></input>
        </fieldset>
        <Button icon={<i className="fa-solid fa-check"></i>} text={"Save"} />
      </form>
    </div>
  );
}
