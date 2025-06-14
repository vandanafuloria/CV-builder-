// general info  form input

export default function Heading(props) {
  const { heading, icon, onClick } = props;

  return (
    <div className="heading" onClick={onClick}>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span style={{ fontSize: "2rem" }}>{icon}</span>
        <h3>{heading}</h3>
      </div>
      <div>
        <span style={{ textAlign: "right" }}>
          <i className="fa-solid fa-angle-down"></i>
        </span>
      </div>
    </div>
  );
}
