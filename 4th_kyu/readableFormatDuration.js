// 4th kyu
// Human readable duration format
// https://www.codewars.com/kata/52742f58faf5485cae000b9a/

function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const time = { seconds: seconds, minutes: 0, hours: 0, days: 0, years: 0 };
  const convToNextUnit = { seconds: 60, minutes: 60, hours: 24, days: 365 };
  const separators = { 0: "", 1: " and ", 2: ", " };
  let unitsOfTime = Object.keys(time);

  let output = "";
  let separator = 0;

  unitsOfTime.forEach((unit, index) => {
    let nextUnit = unitsOfTime[index + 1] || null;
    if (nextUnit) {
      time[nextUnit] = Math.floor(time[unit] / convToNextUnit[unit]);
      time[unit] = time[unit] % convToNextUnit[unit];
    }

    if (time[unit]) {
      output =
        `${time[unit]} ${
          time[unit] === 1 ? unit.substring(0, unit.length - 1) : unit
        }${separators[separator]}` + output;
      if (separator < 2) separator++;
    }
  });
  return output;
}
console.log(formatDuration(31536002));
