export default function Button({ icon, text, onClick }) {
  return (
    <button id="button" onClick={onClick}>
      {icon} {text}
    </button>
  );
}
