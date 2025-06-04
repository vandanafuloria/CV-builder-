import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function EducationalInformation({
  setEducations,
  educations,
  setFormData,
  formData,
}) {
  // setting new educational data which user has filled  to the array

  const [isFormVisisble, setIsFormVisible] = useState(false); // list or form
  const [isDegreeSection, setDegreeSection] = useState(false);
  const [isIdPresent, setIsIdPresent] = useState(false);

  const handleAddEducation = () => {
    setIsFormVisible(true);
  };

  const handleSaveEducation = (e) => {
    e.preventDefault();

    const newEducation = {
      ...formData,
      id: uuidv4(), // generate unique ID here
    };
    console.log(formData);

    setEducations([...educations, newEducation]);
    setIsFormVisible(false);

    setFormData({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",

      city: "",
      country: "",
      id: "",
    });
  };
  // console.log(formData);
  function handleDeleteEducation(e) {
    e.preventDefault();
    console.log(formData.id); // we got the clicked id;
    const update = educations.filter((edu) => edu.id != formData.id);
    setEducations(update); // all are except that delted one put in setEducation
  }
  function HandleCancel() {
    setIsFormVisible(false);
  }

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
            key={education.id}
            className="educations"
            // wheneever this div will click , which is showing with school name
            // all data of that form will set to the form;
            onClick={() => {
              setFormData({ ...education });

              setIsFormVisible(true);
              setIsIdPresent(true);
            }}
          >
            <h5> {education.degree}</h5>
          </div>
        ))}

      {isFormVisisble && (
        <form>
          <fieldset>
            <label htmlFor="degree">Degree</label>
            <input
              id="degree"
              placeholder="Degree"
              type="text"
              value={formData.degree}
              onChange={(e) => {
                setFormData({ ...formData, degree: e.target.value });
              }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="shool">University</label>
            <input
              id="shool"
              placeholder="School / University"
              type="text"
              value={formData.school}
              onChange={(e) => {
                setFormData({ ...formData, school: e.target.value });
              }}
            ></input>
          </fieldset>
          <fieldset>
            <label htmlFor="city">City</label>
            <input
              id="city"
              placeholder="City"
              type="text"
              value={formData.city}
              onChange={(e) => {
                setFormData({ ...formData, city: e.target.value });
              }}
            ></input>
          </fieldset>
          <fieldset>
            <label htmlFor="country">Name</label>
            <input
              id="country"
              type="text"
              placeholder="Country"
              value={formData.country}
              onChange={(e) => {
                setFormData({ ...formData, country: e.target.value });
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
                value={formData.startDate}
                onChange={(e) => {
                  setFormData({ ...formData, startDate: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="end">End Date</label>
              <input
                type="text"
                id="end"
                placeholder="dd/mm/yy"
                value={formData.endDate}
                onChange={(e) => {
                  setFormData({ ...formData, endDate: e.target.value });
                }}
              />
            </div>
          </fieldset>

          <div className="btn">
            <div>
              {isIdPresent && ( // if the task is saved then only delete button will be visible
                <Button
                  icon={<i className="fa-solid fa-trash"></i>}
                  text={"Delete"}
                  onClick={handleDeleteEducation}
                />
              )}
            </div>
            <div>
              {" "}
              <Button text={"Cancel"} onClick={HandleCancel} />
              <Button
                icon={<i className="fa-solid fa-check"></i>}
                text={"Save"}
                onClick={handleSaveEducation}
              />
            </div>
          </div>
        </form>
      )}
      {isDegreeSection && (
        <div className="edu-btn">
          <Button
            icon={<i className="fa-solid fa-plus"></i>}
            text="Add Education"
            onClick={handleAddEducation}
          />
        </div>
      )}
    </div>
  );
}
