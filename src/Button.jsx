export default function Button(props) {
  const { icon, text } = props;
  console.log(icon, text);
  return (
    <button>
      {icon} {text}
    </button>
  );
}
