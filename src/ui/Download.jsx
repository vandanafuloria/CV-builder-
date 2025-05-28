import Button from "./Button";
export default function Download() {
  const icon = <i className="fa-solid fa-download"></i>;
  const text = "Download";

  const handleDownload = () => {
    // download logic
  };

  return (
    <div className="download">
      <h5 style={{ fontSize: "1.5rem", margin: 5 }}>Save your resume</h5>
      <Button icon={icon} text={text} onClick={handleDownload} />
    </div>
  );
}
