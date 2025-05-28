import Heading from "../ui/Heading";
import Button from "../ui/Button";

export default function EducationalInformation() {
  return (
    <div className="edu-info">
      <Heading
        icon={<i className="fa-solid fa-user-graduate"></i>}
        heading={"Educational Information"}
      />
      <form>
        <fieldset>
          <label htmlFor="degree">Name</label>
          <input id="degree" placeholder="Degree" type="text"></input>
        </fieldset>
        <fieldset>
          <label htmlFor="shool">Name</label>
          <input
            id="shool"
            placeholder="School / University"
            type="text"
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor="city">Name</label>
          <input id="city" placeholder="City" type="text"></input>
        </fieldset>
        <fieldset>
          <label htmlFor="country">Name</label>
          <input id="country" type="text" placeholder="Country"></input>
        </fieldset>
        <fieldset>
          <div className="dates">
            <label htmlFor="start">Start Date</label>
            <input type="date" id="start" />
          </div>
          <div>
            <label htmlFor="end">End Date</label>
            <input type="date" id="end" />
          </div>
        </fieldset>

        <Button icon={<i className="fa-solid fa-check"></i>} text={"Save"} />
      </form>
    </div>
  );
}
