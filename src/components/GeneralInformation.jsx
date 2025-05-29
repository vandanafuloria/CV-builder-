import { useState } from "react";
import Button from "../ui/Button";
import Heading from "../ui/Heading";

export default function GeneralInformation({
  setName,
  setEmail,
  setContact,
  setLocation,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);

    // setIsOpen((old) => {
    //   // calculation
    //   return !old;
    // });
  };
  return (
    <div className="gen-info">
      <Heading
        icon={<i className="fa-solid fa-user"></i>}
        heading={"General Information"}
        onClick={handleToggle}
      />

      {isOpen && (
        <form>
          <fieldset>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </fieldset>
          <fieldset>
            <label htmlFor="phone">Contact</label>
            <input
              id="phone"
              placeholder="Contact Number"
              onChange={(e) => {
                setContact(e.target.value);
              }}
            ></input>
          </fieldset>
          <fieldset>
            <label htmlFor="location">Location</label>
            <input
              id="location"
              placeholder="Enter City"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            ></input>
          </fieldset>
          <div className="btn">
            <Button text={"Cancel"} />
            <Button
              icon={<i className="fa-solid fa-check"></i>}
              text={"Save"}
            />
          </div>
        </form>
      )}
    </div>
  );
}
