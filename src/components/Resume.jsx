export default function Resume({
  img,
  name,
  email,
  contact,
  location,
  formData,
  educations,
  jobData,
  employment,
}) {
  console.log("this is resume", educations);
  return (
    <div>
      <div className="resume-header">
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <img
            src={img}
            style={{ width: 80, borderRadius: "50%", height: 80 }}
          />
          <h1>{name}</h1>
        </div>

        <div className="info">
          <span>
            <i className="fa-solid fa-envelope"></i>
            <p> {email} </p>
          </span>
          <span>
            <i className="fa-solid fa-phone"></i>
            <p>{contact}</p>
          </span>
          <span>
            <i className="fa-solid fa-location-dot"></i>
            <p>{location}</p>
          </span>
        </div>
      </div>
      <h2 className="resume-heading">Education</h2>

      {/* this wiill show previw of filling inforamtion */}

      <div className="edu">
        <div className="start-end">
          <p>
            {formData.startDate} {formData.endDate}
          </p>
          <p>
            {formData.city} {formData.country}
          </p>
        </div>
        <div>
          <h3>{formData.school}</h3>
          <p>{formData.degree}</p>
        </div>
      </div>
      {/** this is showing saved education details by rendering educations array */}

      <div className="filled-education-section">
        {educations.map((ed) => {
          return (
            <div className="each-education edu">
              {" "}
              <div className="start-end">
                <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
                  {ed.startDate} {ed.endDate}
                </p>
                <p>
                  {ed.city} {ed.country}
                </p>
              </div>
              <div>
                <h3>{ed.school}</h3>
                <p>{ed.degree}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ************************************************************/}
      <h2 className="resume-heading">Professional Experience</h2>
      <div className="exp">
        <div>
          <p>{jobData.job}</p>
          <p className="company">{jobData.company}</p>
          <div className="start-end">
            <p>{jobData.startDate}</p>
            <p> {jobData.endDate}</p>
          </div>
        </div>
        <div>
          <p className="desc">{jobData.description}</p>
        </div>
      </div>
      <div className="saved-experience">
        {employment.map((emp) => {
          console.log(emp);
          return (
            <div
              className="exp"
              style={{
                margin: "2rem auto",
                borderTop: "2px solid gray",
                padding: "10px",
              }}
            >
              <div>
                <p>{emp.job}</p>
                <p className="company">{emp.company}</p>
                <div className="start-end">
                  <p>{emp.startDate}</p>
                  <p> {emp.endDate}</p>
                </div>
              </div>
              <p className="desc">{emp.description}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
