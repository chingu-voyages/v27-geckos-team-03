import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Styles/Calendar.css';
import { toTwelveHr } from "../Components/MedScheduler/helpers";


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


function toTwelveHr2(hour) {
  if (hour === 0) return "12 AM";
  if (hour <= 11) return `${hour} AM`;
  if (hour === 12) return "12 PM";
  if (hour <= 23) return `${hour - 12} PM`;
  return null;
}
/* Switched to make table for each row - Lewis
const makeRow = (rowColor, dayString, doseArr) => {
  return (
    <tr className={rowColor}>
      <td className="day"><span className="h4">{dayString}</span></td>
      <td>
        <table
          className="table table-sm table-borderless"
        >
          <tbody>
            {doseArr.map((el, i) => (
              <tr key={i}>
                <td><span>{el.medName}</span></td>
                <td>
                  <div className={"float-right"}>{toTwelveHr(el.hour)}</div>
                </td>
              </tr>
            ))}
            </tbody>
        </table>
      </td>
    </tr>
  );
};
*/
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
    <div className="container">
      <h1 className="text-center">Calendar</h1>

      <div className="d-flex flex-wrap justify-content-center">
        {makeTable("table-primary", "Mon", monDoses)}
        {makeTable("table-secondary", "Tue", tuesDoses)}
        {makeTable("table-success", "Wed", wedDoses)}
        {makeTable("table-light", "Thu", thurDoses)}
        {makeTable("table-warning", "Fri", friDoses)}
        {makeTable("table-info", "Sat", satDoses)}
        {makeTable("table-danger", "Sun", sunDoses)}
      </div>
    </div>
  );
}


/*
      <div className="d-flex justify-content-center">
        <table className="table table-bordered table-fit">
          <tbody>
            {makeRow("table-primary", "Mon", monDoses)}
            {makeRow("table-secondary", "Tue", tuesDoses)}
            {makeRow("table-success", "Wed", wedDoses)}
            {makeRow("table-light", "Thu", thurDoses)}
            {makeRow("table-warning", "Fri", friDoses)}
            {makeRow("table-info", "Sat", satDoses)}
            {makeRow("table-danger", "Sun", sunDoses)}
          </tbody>
        </table>
      </div>
    </div>
      
  );
}
*/
const makeTable = (rowColor, dayString, doseArr) => {
  return ( 
    <table style={{width: 300}} className={rowColor + ' table table-sm mx-3 my-table-shadow rounded'}>
      <tbody>
        <tr>
          <td className="day"><span className="h4 m-2">{dayString}</span></td>
          <td>
            <table className="table table-sm table-borderless">
              <tbody>
                {doseArr.map((el, i) => (
                  <tr key={i}>
                    <td>{el.medName}</td>
                    <td>
                      <div className={"float-right"}>{toTwelveHr(el.hour)}</div>
                      {console.log("el.hour: " + String(el.hour) + ". after toTwelveHr: " + toTwelveHr(el.hour))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}; // end function makeTable