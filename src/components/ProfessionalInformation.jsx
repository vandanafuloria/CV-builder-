import { useState } from "react";
import Button from "../ui/Button";
import Heading from "../ui/Heading";

export default function ProfessionalInformation({
  setJob,
  setCompany,
  setDesc,
  setStartDate,
  setEndDate,
}) {
  const [isProfessionalVisible, setProfessionalVisible] = useState(false);

  return (
    <div className="prof-info">
      <Heading
        icon={<i className="fa-solid fa-briefcase"></i>}
        heading={"Professional Experience"}
        onClick={() => {
          setProfessionalVisible(!isProfessionalVisible);
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
              onChange={(e) => setJob(e.target.value)}
            ></input>
          </fieldset>
          <fieldset>
            <label htmlFor="company">Company</label>
            <input
              id="shool"
              placeholder="Company"
              type="text"
              onChange={(e) => setCompany(e.target.value)}
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
                  setStartDate(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="end">End Date</label>
              <input
                type="text"
                id="end"
                placeholder="dd/mm/yy"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </fieldset>
          <fieldset>
            <label htmlFor="desc">Description</label>
            <textarea
              id="desc"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            ></textarea>
          </fieldset>
          <div className="btn">
            <Button text={"Cancle"} />
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
