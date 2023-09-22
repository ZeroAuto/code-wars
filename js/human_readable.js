const formatDuration = (seconds) => {
  if (seconds === 0) return 'now';

  let yearsStr = "";
  let daysStr = "";
  let hoursStr = "";
  let minutesStr = "";
  let secondsStr = "";

  if (seconds >= 31536000) {
    const years = Math.floor(seconds/31536000);
    seconds -= (years * 31536000);
    yearsStr = `${years} ${years > 1 ? 'years' : 'year'}`;
  }

  if (seconds >= 86400) {
    const days = Math.floor(seconds/86400);
    seconds -= (days * 86400);
    daysStr = `${days} ${days > 1 ? 'days' : 'day'}`;
  }

  if (seconds >= 3600) {
    const hours = Math.floor(seconds/3600);
    seconds -= (hours * 3600);
    hoursStr = `${hours} ${hours > 1 ? 'hours' : 'hour'}`
  }

  if (seconds >= 60) {
    const minutes = Math.floor(seconds/60);
    seconds -= (minutes * 60);
    minutesStr = `${minutes} ${minutes > 1 ? 'minutes' : 'minute'}`
  }

  if (seconds > 0) {
    secondsStr = `${seconds} ${seconds > 1 ? 'seconds' : 'second'}`
  }
  
  const resultArr = [yearsStr, daysStr, hoursStr, minutesStr, secondsStr].filter(Boolean);
  const last = resultArr.pop();

  return resultArr.length === 0 ? last : resultArr.join(', ') + ' and ' + last;
}

const formatDurationAlt = seconds => {
  if (seconds === 0) return 'now';

  const timeObj = {
    year: 31536000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  const resultArr = [];

  for (const key in timeObj) {
    const unit = timeObj[key];
    if (seconds >= unit) {
      const val = Math.floor(seconds/unit);
      resultArr.push(`${val} ${key}${val > 1 ? 's' : ''}`);
      seconds = seconds % unit;
    }
  }

  // use regex and replace to sub the last comma for 'and'
  return resultArr.length > 1 ? resultArr.join(', ').replace(/,([^,]*)$/, ' and' + '$1') : resultArr[0];
}

console.log(formatDurationAlt(1)); // 1 second
console.log(formatDurationAlt(62)); // 1 minute and 2 seconds
console.log(formatDurationAlt(120)); // 1 second
console.log(formatDurationAlt(3600)); // 1 second
console.log(formatDurationAlt(3662)); // 1 second
console.log(formatDurationAlt(86260564));
