import { useState } from "react";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
const up = <i class="fa-solid fa-angle-up"></i>;
const down = <i class="fa-solid fa-angle-down"></i>;

export default function GeneralInformation({
  setName,
  setEmail,
  setContact,
  setLocation,
  setImg,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleImageChange(e) {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setImg(URL.createObjectURL(file)); // creates a usable preview URL
    }
  }

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="gen-info">
      <Heading
        icon={<i className="fa-solid fa-user"></i>}
        heading={"General Information"}
        onClick={handleToggle}
        toggle={
          isOpen ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )
        }
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
          <fieldset>
            <label htmlFor="photo">Profile image</label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handleImageChange}
            />
          </fieldset>
        </form>
      )}
    </div>
  );
}
