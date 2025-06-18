// general info  form input

export default function Heading(props) {
  const { heading, icon, onClick, toggle } = props;

  return (
    <div className="heading" onClick={onClick} style={{ cursor: "pointer" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <span style={{ fontSize: "2rem" }}>{icon}</span>
        <h3>{heading}</h3>
      </div>
      <div>
        <span style={{ textAlign: "right" }}>{toggle}</span>
      </div>
    </div>
  );
}
