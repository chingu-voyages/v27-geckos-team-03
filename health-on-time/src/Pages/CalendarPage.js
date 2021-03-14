import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CalendarPage({ prescriptions }) {
  const [medications, setMedications] = useState([]);
  // A functions that sets Prescriptions to the calendar
  // For now it uses fetch API to get data. It may take props in the future.

  console.log(prescriptions);
  useEffect(() => {
    const setPrescriptions = () => {
      prescriptions.forEach((prescription) => {
        //prescriptions.forEach((prescription) => {
        const medName = prescription.medication.name;

        //Dealing with the "single dose per day" Meds
        if (!prescription.hours[1]) {
          const hour = prescription.hours;

          prescription.weekdays.forEach((day) => {
            const nObj = {
              medName,
              day,
              hour,
            };
            //setMedications((medications) => medications.concat(nObj));
            setMedications((medications) =>
              medications.concat(nObj).sort((a, b) => a.hour - b.hour)
            );
          });

          // Multiple meds per day
        } else {
          prescription.hours.forEach((hour) => {
            prescription.weekdays.forEach((day) => {
              const nObj = {
                medName,
                day,
                hour,
              };
              //setMedications((medications) => medications.concat(nObj));
              setMedications((medications) =>
                medications.concat(nObj).sort((a, b) => a.hour - b.hour)
              );
            });
          });
        }
      });
    };
    //useEffect(() => {
    prescriptions && setPrescriptions();
    console.log("useEffect used");
  }, [prescriptions]);

  return <Chart doses={medications} />;
}

function sortedDay(desiredDay, arr) {
  let dayDoses = arr.filter((el) => el.day === desiredDay);
  return dayDoses.sort((a, b) => a.hour > b.hour);
}

function toTwelveHr(hour) {
  if (hour === 0) return "12 AM";
  if (hour <= 11) return `${hour} AM`;
  if (hour === 12) return "12 PM";
  if (hour <= 23) return `${hour - 12} PM`;
  return null;
}

const makeRow = (rowColor, dayString, doseArr) => {
  return (
    <tbody> {/* Added to get rid of warning that tr can't follow table - Lewis*/}
      <tr className={rowColor}>
        <td className="day">{dayString}</td>
        <td>
          <table
            style={{ width: "200px" }}
            className="table table-sm table-borderless"
          >
            <tbody> {/* Added to get rid of warning that tr can't follow table - Lewis*/}
              {doseArr.map((el, i) => (
                <tr key={i}>
                  <td>{el.medName}</td>
                  <td>
                    <div className={"float-right"}>{toTwelveHr(el.hour)}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>  
  );
};

//let testHour;

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
        {makeRow("table-primary", "Mon", monDoses)}
        {makeRow("table-secondary", "Tue", tuesDoses)}
        {makeRow("table-success", "Wed", wedDoses)}
        {makeRow("table-light", "Thu", thurDoses)}
        {makeRow("table-warning", "Fri", friDoses)}
        {makeRow("table-info", "Sat", satDoses)}
        {makeRow("table-danger", "Sun", sunDoses)}
      </table>
    </div>
  );
}
