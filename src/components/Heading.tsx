import "../App.css";

function Heading() {
  return (
    <div
      style={{
        width: "calc(100% - 30px)",
        margin: "30px",
        color: "var(--primary-color)",
        fontFamily: "var(--font-main)",
        fontSize: "0.89em",
        letterSpacing:'0.1em',
        wordSpacing:'0.1em'
      }}
    >
      A LITTLE ABOUT US / 03
    </div>
  );
}

export default Heading;