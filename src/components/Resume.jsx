export default function Resume({
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
        <h1>{name}</h1>
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
        <div>
          <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
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
              <div>
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
          <h3 style={{ fontSize: "1rem", fontWeight: "bold" }}></h3>
          <p>{jobData.job}</p>
          <p className="company">{jobData.company}</p>
          <p>Start: {jobData.startDate}</p>
          <p>End: {jobData.endDate}</p>
        </div>
        <div>
          <p className="desc">{jobData.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
