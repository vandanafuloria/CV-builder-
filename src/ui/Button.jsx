export default function Button({ icon, text, onClick }) {
  console.log(icon, text);
  const color =
    "linear-gradient(305deg, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)";
  return (
    <button
      style={{
        fontSize: "1rem",
        padding: 10,
        borderRadius: "10px",
        border: "lightgrey 1px solid",
        color: "lightgray",
        background: "rgba(9, 9, 121, 1)",
      }}
      onClick={onClick}
    >
      {icon} {text}
    </button>
  );
}
