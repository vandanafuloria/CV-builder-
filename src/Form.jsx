import Information from "./Information";

export default function Form({ generalInfo }) {
  console.log("general information ", generalInfo);

  return (
    <>
      {generalInfo.map(({ label, placeholder }) => {
        // why spread operator works but normal props did not
        return <Information label={label} placeholder={placeholder} />;
      })}
    </>
  );
}
