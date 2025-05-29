import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { useState } from "react";

export default function EducationalInformation({
  setDegree,
  setSchool,
  setCity,
  setCountry,
  setStart,
  setEnd,
}) {
  const [educations, setEducations] = useState([
    {
      school: "University of California",
      degree: "Bachelors of Commerce",
      startDate: "24-56-3",
      endDate: "",
      location: "America",
    },
    {
      school: "Standford University",
      degree: "Bachelors of Commerce",
      startDate: "24-56-3",
      endDate: "",
      location: "America",
    },
  ]);

  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const [isFormVisisble, setIsFormVisible] = useState(false); // list or form
  const [isDegreeSection, setDegreeSection] = useState(false);

  const handleAddEducation = () => {
    setIsFormVisible(true);
  };

  const handleSaveEducation = () => {
    setIsFormVisible(false);
    setEducations([
      ...educations,
      {
        school: "UNiversity of Singapore",
        degree: "Bachelors of Commerce",
        startDate: "24-56-3",
        endDate: "",
        location: "America",
      },
    ]);
  };
  // console.log(formData);

  return (
    <div className="edu-info">
      <Heading
        icon={<i className="fa-solid fa-user-graduate"></i>}
        heading={"Educational Information"}
        onClick={() => {
          setDegreeSection(!isDegreeSection);
        }}
      />
      {isDegreeSection &&
        educations.map((education) => (
          <div
            className="educations"
            onClick={() => {
              setFormData({ ...education });
              setIsFormVisible(true);
            }}
          >
            <h5> {education.school}</h5>
          </div>
        ))}

      {isDegreeSection && (
        <div className="edu-btn">
          <Button
            icon={<i className="fa-solid fa-plus"></i>}
            text="Add Education"
            onClick={handleAddEducation}
          />
        </div>
      )}

      {isFormVisisble && (
        <form>
          <fieldset>
            <label htmlFor="degree">Degree</label>
            <input
              id="degree"
              placeholder="Degree"
              type="text"
              value={formData.degree}
              onChange={(e) =>
                setFormData({ ...formData, degree: e.target.value })
              }
            />
          </fieldset>
          <fieldset>
            <label htmlFor="shool">University</label>
            <input
              id="shool"
              placeholder="School / University"
              type="text"
              value={formData.school}
              onChange={(e) =>
                setFormData({ ...formData, school: e.target.value })
              }
            ></input>
          </fieldset>
          <fieldset>
            <label htmlFor="city">City</label>
            <input
              id="city"
              placeholder="City"
              type="text"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            ></input>
          </fieldset>
          <fieldset>
            <label htmlFor="country">Name</label>
            <input
              id="country"
              type="text"
              placeholder="Country"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            ></input>
          </fieldset>
          <fieldset className="dates">
            <div>
              <label htmlFor="start">Start Date</label>
              <input
                type="text"
                id="start"
                placeholder="dd/mm/yy"
                onChange={(e) => {
                  setStart(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="end">End Date</label>
              <input
                type="text"
                id="end"
                placeholder="dd/mm/yy"
                onChange={(e) => {
                  setEnd(e.target.value);
                }}
              />
            </div>
          </fieldset>
          <div className="btn">
            <Button text={"Cancel"} />

            <Button
              icon={<i className="fa-solid fa-check"></i>}
              text={"Save"}
              onClick={handleSaveEducation}
            />
          </div>
        </form>
      )}
    </div>
  );
}
