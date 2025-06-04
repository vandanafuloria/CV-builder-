import Button from "./Button";

import html2pdf from "html2pdf.js";

import Resume from "../components/Resume";

export default function Download({ resumeRef }) {
  const icon = <i className="fa-solid fa-download"></i>;
  const text = "Download PDF";

  function handleDownload() {
    const element = resumeRef.current;
    const opt = {
      margin: 0.5,
      filename: "cv-builder.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(element).set(opt).save();
    console.log("pff ");
  }

  return (
    <div className="download">
      <h3>Save your resume</h3>
      <Button icon={icon} text={text} onClick={handleDownload} />
    </div>
  );
}
