export default function Resume({
  name,
  email,
  contact,
  location,
  degree,
  school,
  city,
  country,
  start,
  end,
  job,
  company,
  desc,
  startDate,
  endDate,
}) {
  /*{
        name, email, location,
        degree : [{deg1}, {deg2}, ...],
        job : [{job1}, {job2}, ..]
    }
    */
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
      <div className="edu">
        <div>
          <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
            {start} {end}
          </p>
          <p>
            {city} {country}
          </p>
        </div>
        <div>
          <h3>{school}</h3>
          <p>{degree}</p>
        </div>
      </div>
      <h2 className="resume-heading">Professional Experience</h2>
      <div className="exp">
        <div>
          <h3 style={{ fontSize: "1rem", fontWeight: "bold" }}>
            {startDate} {endDate}
          </h3>
          <p>{job}</p>
        </div>
        <div>
          <p className="company">{company}</p>
          <p>{job}</p>
          <p className="desc">{desc}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
