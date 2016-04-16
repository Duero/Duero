log = console.log.bind(console);

formatMinutes = (minutes) => {
	return moment.duration(minutes, 'minutes').format('H:mm');
};

weekInterval = () => {
  return {
    from: moment({ hour: 0, minute: 0, second: 0 }).weekday(0),
    to: moment({ hour: 0, minute: 0, second: 0 }).weekday(6),
  }
};


roundTo = (number, decimals) => {
  var t = parseInt(1+''+Array(decimals).join("0"));
  return Math.round(number * t) / t;
}
