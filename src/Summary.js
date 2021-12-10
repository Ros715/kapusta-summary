import "./Summary.css";

const MONTHS = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

function formatNumber(number) {
  const numberString = number.toFixed(2) + "";
  const x = numberString.split(".");
  let x1 = x[0];
  const x2 = x.length > 1 ? "." + x[1] : "";
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + " " + "$2");
  }
  return x1 + x2;
}

const Summary = ({ data }) => {
  return (
    <div className="summary-container">
      <p className="summary-title">Сводка</p>
      <table className="summary-table">
        {data.map((monthData) => {
          return (
            <tr>
              <td className="summary-month">{MONTHS[monthData.month]}</td>
              <td className="summary-sum">{formatNumber(monthData.sum)}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Summary;
