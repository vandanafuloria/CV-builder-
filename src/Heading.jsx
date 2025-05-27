import Button from "./Button";
import Input from "./Information";
import Form from "./form";
// general info  form input

export default function Heading(props) {
  const { heading, icon } = props;

  return (
    <div
      className="heading"
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "2rem",
        alignItems: "center",
        border: "1px solid gray",
        margin: "1rem",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "5px 5px 10px gray",
      }}
    >
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
