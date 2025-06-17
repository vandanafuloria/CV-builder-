import { useState } from "react";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import { v4 as uuidv4 } from "uuid";

export default function ProfessionalInformation({
  jobData,
  setJobData,
  employment,
  setEmployment,
}) {
  // form to filled the work experience
  const [isProfessionalVisible, setProfessionalVisible] = useState(false);
  // button to add the experiecnt
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isId, setIsId] = useState(false);
  const [isExpSection, setIsExpSection] = useState(false);

  console.log(isExpSection, isButtonVisible);

  function handleAddExperience() {
    // form will open
    setProfessionalVisible(true);
    setIsExpSection(false);
  }
  function HandleDeleteExperience(e) {
    e.preventDefault();
    // here filter the deleted experiecne and rest will fill in new array, then setEmployment wiht new values
    const updateEmployment = employment.filter(
      (employ) => employ.id != jobData.id
    );

    setEmployment(updateEmployment);
    // filter give an array that why no need to put updateEMplyoment in an arry;

    setProfessionalVisible(false);
    setIsExpSection(true);
    setJobData({
      // if deleted then form will be empty;
      job: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      id: "",
    });
  }

  function handleSaveExperience(e) {
    e.preventDefault();
    if (jobData.job == "" || jobData.company == "") {
      alert(
        "Please fill all the Relevent details related to your previous experience"
      );
      return;
    }
    console.log(jobData.id);
    if (jobData.id !== "") {
      const filtered = employment.filter((job) => job.id != jobData.id);
      setEmployment([...filtered, jobData]);
    } else if (jobData.id == "") {
      const newEmployment = { ...jobData, id: uuidv4() };

      setEmployment([...employment, newEmployment]);
    }
    setProfessionalVisible(false);
    setIsExpSection(true);

    setJobData({
      job: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      id: "",
    });
    console.log(employment);
  }
  function hideForm() {
    // when user click on cancle, form will hide;
    setProfessionalVisible(false);
    setJobData({
      job: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      id: "",
    });
  }

  return (
    <div className="prof-info">
      <Heading
        icon={<i className="fa-solid fa-briefcase"></i>}
        heading={"Professional Experience"}
        onClick={() => {
          setIsExpSection(!isExpSection);
          setIsButtonVisible(!isButtonVisible);
        }}
        toggle={
          isProfessionalVisible || isExpSection ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )
        }
      />
      {isExpSection &&
        employment.map((emp) => (
          <div
            className="educations"
            onClick={() => {
              // there are multiple statesment thats why not the single function
              setJobData({ ...emp });

              setProfessionalVisible(true);
              setIsId(true);
              setIsExpSection(false);
            }}
          >
            <h5>{emp.company}</h5>
          </div>
        ))}

      {isProfessionalVisible && (
        <form>
          <fieldset>
            <label htmlFor="job">Job</label>
            <input
              id="job"
              placeholder="Job Title"
              type="text"
              value={jobData.job}
              onChange={(e) => setJobData({ ...jobData, job: e.target.value })}
            ></input>
          </fieldset>
          <fieldset>
            <label htmlFor="company">Company</label>
            <input
              id="shool"
              placeholder="Company"
              type="text"
              value={jobData.company}
              onChange={(e) =>
                setJobData({ ...jobData, company: e.target.value })
              }
            ></input>
          </fieldset>
          <fieldset className="dates">
            <div>
              <label htmlFor="start">Start Date</label>
              <input
                type="date"
                id="start"
                value={jobData.startDate}
                placeholder="dd/mm/yy"
                onChange={(e) => {
                  setJobData({ ...jobData, startDate: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="end">End Date</label>
              <input
                type="date"
                id="end"
                value={jobData.endDate}
                placeholder="dd/mm/yy"
                onChange={(e) =>
                  setJobData({ ...jobData, endDate: e.target.value })
                }
              />
            </div>
          </fieldset>
          <fieldset>
            <label htmlFor="desc">Description</label>
            <textarea
              id="desc"
              value={jobData.description}
              onChange={(e) => {
                setJobData({ ...jobData, description: e.target.value });
              }}
            ></textarea>
          </fieldset>
          <div className="btn">
            {isId && (
              <div>
                <Button
                  icon={<i className="fa-solid fa-trash"></i>}
                  text={"Delete"}
                  onClick={HandleDeleteExperience}
                />
              </div>
            )}
            <div>
              <Button text={"Cancle"} onClick={hideForm} />
              <Button
                icon={<i className="fa-solid fa-check"></i>}
                text={"Save"}
                onClick={handleSaveExperience}
              />
            </div>
          </div>
        </form>
      )}
      {isButtonVisible && (
        <div className="edu-btn">
          {" "}
          <Button
            text={"Add Experience"}
            icon={<i className="fa-solid fa-plus"></i>}
            onClick={handleAddExperience}
          />
        </div>
      )}
    </div>
  );
}
