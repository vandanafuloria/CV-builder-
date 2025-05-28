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
}) {
  return (
    <div>
      <div className="resume-header">
        <h1>{name}</h1>
        <div className="info">
          <span>
            <i className="fa-solid fa-envelope"></i>
            <p>{email}</p>
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
          <p>
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
          <h3>20202 </h3>
          <p>Ui designger</p>
        </div>
        <div>
          <p className="company">Umbrella Inc.</p>
          <p>UX & UI Designer</p>
          <p>
            Designed and prototyped user interface patterns for various clients
            in various industries, ranging from self-service apps within the
            telecommunications-sector to mobile games for IOS and Android
          </p>
        </div>
      </div>
      <hr />

      <div className="exp">
        <div>
          <h3>20202 </h3>
          <p>Ui designger</p>
        </div>
        <div>
          <p className="company">Umbrella Inc.</p>
          <p>UX & UI Designer</p>
          <p>
            Designed and prototyped user interface patterns for various clients
            in various industries, ranging from self-service apps within the
            telecommunications-sector to mobile games for IOS and Android
          </p>
        </div>
      </div>
    </div>
  );
}
