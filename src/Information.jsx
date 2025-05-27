export default function Information({ label, placeholder }) {
  // const { label, placeholder } = element;

  console.log(label, placeholder);
  console.log("this is input");
  return (
    <div>
      <fieldset>
        <label>{label}</label>
        <input
          type="text"
          placeholder={placeholder}
          style={{ width: "100%" }}
        />
      </fieldset>
    </div>
  );
}
