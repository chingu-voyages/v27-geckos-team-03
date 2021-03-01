import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return <Chart doses={doses1} />;
}
function sortedDay(desiredDay, arr) {
  let dayDoses = arr.filter((el) => el.day == desiredDay);
  return dayDoses.sort((a, b) => a.hour > b.hour);
}

function toTwelveHr(hour) {
  if (hour === 0) return "12 AM";
  if (hour <= 11) return `${hour} AM`;
  if (hour === 12) return "12 PM";
  if (hour <= 23) return `${hour - 12} PM`;
  return null;
}

function makeRow(rowColor, dayString, doseArr) {
  return (
    <tr className={rowColor}>
      <td className="day">{dayString}</td>
      <td>
        <table
          style={{ width: "200px" }}
          className="table table-sm table-borderless"
        >
          {doseArr.map((el) => (
            <tr>
              <td>{el.medName}</td>
              <td>
                <div className={"float-right"}>{toTwelveHr(el.hour)}</div>
              </td>
            </tr>
          ))}
        </table>
      </td>
    </tr>
  );
}

const doses1 = [
  { medName: "Prozac", day: 0, hour: 8 },
  { medName: "Prozac", day: 1, hour: 8 },
  { medName: "Prozac", day: 2, hour: 8 },
  { medName: "Prozac", day: 3, hour: 8 },
  { medName: "Prozac", day: 4, hour: 8 },
  { medName: "Prozac", day: 5, hour: 8 },
  { medName: "Prozac", day: 6, hour: 8 }, //
  { medName: "Tegretol", day: 0, hour: 12 },
  { medName: "Tegretol", day: 0, hour: 6 },
  { medName: "Tegretol", day: 0, hour: 18 },
  { medName: "Tegretol", day: 3, hour: 6 },
  { medName: "Tegretol", day: 3, hour: 18 },
  { medName: "Tegretol", day: 3, hour: 12 }, //
  { medName: "Vitamin D", day: 6, hour: 23 }, //
  { medName: "Vitamin D", day: 4, hour: 0 },
  { medName: "Vitamin D", day: 2, hour: 20 },
];

function Chart(props) {
  const doses = props.doses;
  const monDoses = sortedDay(0, doses);
  const tuesDoses = sortedDay(1, doses);
  const wedDoses = sortedDay(2, doses);
  const thurDoses = sortedDay(3, doses);
  const friDoses = sortedDay(4, doses);
  const satDoses = sortedDay(5, doses);
  const sunDoses = sortedDay(6, doses);

  return (
    <div>
      <table className="table table-bordered">
        {makeRow("table-primary", "Monday", monDoses)}
        {makeRow("table-secondary", "Tuesday", tuesDoses)}
        {makeRow("table-success", "Wednesday", wedDoses)}
        {makeRow("table-light", "Thursday", thurDoses)}
        {makeRow("table-warning", "Friday", friDoses)}
        {makeRow("table-info", "Saturday", satDoses)}
        {makeRow("table-danger", "Sunday", sunDoses)}
      </table>
    </div>
  );
}
