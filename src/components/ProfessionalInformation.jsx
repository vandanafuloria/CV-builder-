import Button from "../ui/Button";
import Heading from "../ui/Heading";

export default function ProfessionalInformation() {
  return (
    <div className="prof-info">
      <Heading
        icon={<i className="fa-solid fa-briefcase"></i>}
        heading={"Professional Experience"}
      />
      <form>
        <fieldset>
          <label htmlFor="job">Job</label>
          <input id="job" placeholder="Job Title" type="text"></input>
        </fieldset>
        <fieldset>
          <label htmlFor="company">Company</label>
          <input id="shool" placeholder="Company" type="text"></input>
        </fieldset>
        <fieldset className="dates">
          <div>
            <label htmlFor="start">Start Date</label>
            <input type="text" id="start" placeholder="dd/mm/yy" />
          </div>
          <div>
            <label htmlFor="end">End Date</label>
            <input type="text" id="end" placeholder="dd/mm/yy" />
          </div>
        </fieldset>
        <fieldset>
          <label htmlFor="desc">Description</label>
          <textarea id="desc"></textarea>
        </fieldset>
        <Button icon={<i className="fa-solid fa-check"></i>} text={"Save"} />
      </form>
    </div>
  );
}
