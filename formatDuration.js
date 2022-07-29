// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration(seconds) {

  if (!seconds) return "now";

  const format = {
    year: Math.floor(seconds / 31536000),
    day: Math.floor((seconds % 31536000) / 86400),
    hour: Math.floor(((seconds % 31536000) % 86400) / 3600),
    minute: Math.floor((((seconds % 31536000) % 86400) % 3600) / 60),
    second:Math.floor((((seconds % 31536000) % 86400) % 3600) % 60)
  }

  const formattedTimeArray = [];

  for (const timeUnit in format) {

    if (format[timeUnit]) {

      const plural = format[timeUnit] > 1 ? "s" : "";

      formattedTimeArray.push(`${format[timeUnit]} ${timeUnit}${plural}`);
    }
  }
  if (formattedTimeArray.length === 1) {
    return formattedTimeArray[0];
  }
  const lastTimeEntry = formattedTimeArray.pop();

  return `${formattedTimeArray.join(", ")} and ${lastTimeEntry}`;
}
