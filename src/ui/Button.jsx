export default function Button({ icon, text, onClick }) {
  return (
    <button style={{ cursor: "pointer" }} id="button" onClick={onClick}>
      {icon} {text}
    </button>
  );
}
