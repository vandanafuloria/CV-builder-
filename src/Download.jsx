import Button from "./Button";
export default function Download() {
  const icon = <i className="fa-solid fa-download"></i>;
  const text = "Download";

  const handleDownload = () => {
    // download logic
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "2rem",
        padding: "1rem",
        margin: "1rem",
        border: "1px solid gray",
        borderRadius: "10px",
        boxShadow: "5px 5px 10px gray",
      }}
    >
      <h5 style={{ fontSize: "1.5rem", margin: 5 }}>Save your resume</h5>
      <Button icon={icon} text={text} onClick={handleDownload} />
    </div>
  );
}
