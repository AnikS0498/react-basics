import Bkp from "./Bkp";
import GNIT from "./GNIT";

function Mitra(props) {
  const dakNam = props.nickname;
  const babarNam = props.fathersName;
  return (
    <div>
      <h1>{dakNam} Mitra</h1>
      <Bkp />
      <p>
        <strong>Fathers Name</strong> - {babarNam}
      </p>
      <GNIT />
    </div>
  );
}

export default Mitra;
