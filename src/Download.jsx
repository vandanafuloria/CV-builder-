import Button from "./Button";
export default function Download() {
  const icon = <i className="fa-solid fa-download"></i>;
  const text = "Download";
  return (
    <div>
      <h5>Save your resume</h5>
      <Button icon={icon} text={text} />
    </div>
  );
}
