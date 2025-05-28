// general info  form input

export default function Heading(props) {
  const { heading, icon } = props;

  return (
    <div className="heading">
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span style={{ fontSize: "2rem" }}>{icon}</span>
        <h1>{heading}</h1>
      </div>
      <div>
        <span style={{ textAlign: "right" }}>
          <i className="fa-solid fa-angle-down"></i>
        </span>
      </div>
    </div>
  );
}
