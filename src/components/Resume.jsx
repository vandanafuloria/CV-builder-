import Download from "../ui/Download";

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
  resumeRef,
}) {
  return (
    <div>
      <div
        ref={resumeRef}
        style={{ padding: "20px", backgroundColor: "white" }}
      >
        <div className="resume-header">
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <img
              src={img}
              style={{ width: 80, borderRadius: "50%", height: 80 }}
              alt="Profile"
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

        <div className="edu">
          <div className="left-side">
            <p style={{ fontWeight: "bold" }}>
              {formData.city} {formData.country}
            </p>
            <div className="start-end">
              <p> {formData.startDate} </p>
              <p> {formData.endDate}</p>
            </div>
          </div>

          <div className="right-side">
            <h3 style={{ margin: "0.5rem" }}>{formData.school}</h3>
            <p>{formData.degree}</p>
          </div>
        </div>

        <div className="filled-education-section">
          {educations.map((ed, idx) => (
            <div key={idx} className="each-education edu">
              <div className="edu">
                <div className="left-side">
                  <p style={{ fontWeight: "bold" }}>
                    {ed.city} {ed.country}
                  </p>
                  <div className="start-end">
                    <p> {ed.startDate} </p>
                    <p> {ed.endDate}</p>
                  </div>
                </div>

                <div className="right-side">
                  <h3 style={{ margin: "0.5rem" }}>{ed.school}</h3>
                  <p>{ed.degree}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

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
          {employment.map((emp, idx) => (
            <div
              key={idx}
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
          ))}
        </div>
      </div>
    </div>
  );
}
