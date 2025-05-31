import Button from "./Button";
export default function Download() {
  const icon = <i className="fa-solid fa-download"></i>;
  const text = "Download";

  const handleDownload = () => {
    // download logic
  };

  return (
    <div className="download">
      <h3>Save your resume</h3>
      <Button icon={icon} text={text} onClick={handleDownload} />
    </div>
  );
}
