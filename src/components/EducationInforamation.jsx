import Heading from "../ui/Heading";
import Button from "../ui/Button";

export default function EducationalInformation({
  setDegree,
  setSchool,
  setCity,
  setCountry,
  setStart,
  setEnd,
}) {
  return (
    <div className="edu-info">
      <Heading
        icon={<i className="fa-solid fa-user-graduate"></i>}
        heading={"Educational Information"}
      />
      <form>
        <fieldset>
          <label htmlFor="degree">Degree</label>
          <input
            id="degree"
            placeholder="Degree"
            type="text"
            onChange={(e) => {
              setDegree(e.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor="shool">University</label>
          <input
            id="shool"
            placeholder="School / University"
            type="text"
            onChange={(e) => {
              setSchool(e.target.value);
            }}
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

        <Button icon={<i className="fa-solid fa-check"></i>} text={"Save"} />
      </form>
    </div>
  );
}
