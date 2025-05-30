import { useState } from "react";
import Button from "../ui/Button";
import Heading from "../ui/Heading";

export default function ProfessionalInformation({
  jobData,
  setJobData,
  employment,
  setEmployment,
}) {
  const [isProfessionalVisible, setProfessionalVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  function handleAddExperience() {
    setProfessionalVisible(true);
  }
  function handleSaveExperience(e) {
    e.preventDefault();
    setEmployment([...employment, jobData]);
    setProfessionalVisible(false);

    setJobData({
      job: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    console.log(employment);
  }

  return (
    <div className="prof-info">
      <Heading
        icon={<i className="fa-solid fa-briefcase"></i>}
        heading={"Professional Experience"}
        onClick={() => {
          // setProfessionalVisible(!isProfessionalVisible);
          setIsButtonVisible(!isButtonVisible);
        }}
      />
      {isProfessionalVisible && (
        <form>
          <fieldset>
            <label htmlFor="job">Job</label>
            <input
              id="job"
              placeholder="Job Title"
              type="text"
              onChange={(e) => setJobData({ ...jobData, job: e.target.value })}
            ></input>
          </fieldset>
          <fieldset>
            <label htmlFor="company">Company</label>
            <input
              id="shool"
              placeholder="Company"
              type="text"
              onChange={(e) =>
                setJobData({ ...jobData, company: e.target.value })
              }
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
                  setJobData({ ...jobData, startDate: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="end">End Date</label>
              <input
                type="text"
                id="end"
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
              onChange={(e) => {
                setJobData({ ...jobData, description: e.target.value });
              }}
            ></textarea>
          </fieldset>
          <div className="btn">
            <Button text={"Cancle"} />
            <Button
              icon={<i className="fa-solid fa-check"></i>}
              text={"Save"}
              onClick={handleSaveExperience}
            />
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
