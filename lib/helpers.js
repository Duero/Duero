log = console.log.bind(console);

formatMinutes = (minutes) => {
	return moment().hours(0).minutes(minutes).format('H:mm');
}
