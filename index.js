let funcCallCount;

function superbowlWin(records) {
	const win = records.find(findWin);
	return !!win ? win.year : undefined;
}

function findWin(record) {
	return (record.result === "W");
}