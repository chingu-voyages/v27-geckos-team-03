
// input: number 0-23
// output: 12AM thru 12PM 
const toTwelveHr = hour => {
    let ahour = parseInt(hour);
    if (ahour === 0) return "12 AM";
    if (ahour <= 11) return `${ahour} AM`;
    if (ahour === 12) return "12 PM";
    if (ahour <= 23) return `${ahour - 12} PM`;
    return null;
};

function fixCapitalization(words) {
  return words.split(' ').map(el => el[0].toUpperCase() + el.slice(1).toLowerCase()).join(' ');
}

// Get array of chosen days in numeric form from boolean arguments
function getDays(everyDay,mon,tues,wed,thur,fri,sat,sun) {
    if (everyDay)
        return [0, 1, 2, 3, 4, 5, 6];
    let days = [];
    if (mon) days.push(0);
    if (tues) days.push(1);
    if (wed) days.push(2);
    if (thur) days.push(3);
    if (fri) days.push(4);
    if (sat) days.push(5);
    if (sun) days.push(6);
    return days;
}
// Get array of booleans for each day of the week
// Example input: [0, 2]. Example output: [true, false, true, false, false...]
function getBoolsFromDays(weekdaysArr) {
    let results = [];
    for (let i = 0; i < 7; i++){
        if (weekdaysArr.includes(i))
            results[i] = true;
        else results[i] = false;
    }
    return results;
}

// Return array of string names of chosen days from booleans 
// Used in Add Medicine form
function getDayNames(everyDay,mon,tues,wed,thur,fri,sat,sun) {
  if (everyDay) return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let dayNames = [];
  if (mon) dayNames.push('Monday');
  if (tues) dayNames.push('Tuesday');
  if (wed) dayNames.push('Wednesday');
  if (thur) dayNames.push('Thursday');
  if (fri) dayNames.push('Friday');
  if (sat) dayNames.push('Saturday');
  if (sun) dayNames.push('Sunday');
  return dayNames;
}

// wArr: weekdays array from prescription object (Example: [0,4,6])
// short: boolean signifying whether you want abbreviations or not
function dayNamesFromMed(wArr, short) {
    let res = wArr.map(el => {
        switch (parseInt(el)) {
            case 0: return (short ? "Mon" : "Monday"); 
            case 1: return (short ? "Tues" : "Tuesday");
            case 2: return (short ? "Wed" : "Wednesday");
            case 3: return (short ? "Thur" : "Thursday"); 
            case 4: return (short ? "Fri" : "Friday");
            case 5: return (short ? "Sat" : "Saturday");
            case 6: return (short ? "Sun" : "Sunday");
            default: return null;
        }
    })
    console.log(res);
    return res;
}

function displayArray(arr) {
    let myMap = arr.map((el, index, arr) => {
        let myKey = index + '.' + el;
        if (index === arr.length - 1)
            return <span key={myKey}>{el} </span>;
        return <span key={myKey}>{el}, </span>;
    });
    //myMap = myMap.slice(0, myMap.length - 1);
    return myMap;
}

export { getBoolsFromDays, toTwelveHr, fixCapitalization, getDays, getDayNames, displayArray, dayNamesFromMed }

