const submitBet1 = async (event) => {
	event.preventDefault();
	const bet = event.target.bet.value;
	const res = await fetch('/api/makeBet', {
		body: JSON.stringify({
			bet: bet,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
	});
	const result = await res.json();
	setPBet(Number(result.bet));
	console.log(`You bet: ${result.bet}`);
	console.log(result.bet);
	handleBankerDiceStart();
};

// Language: javascript
// Date: 4/14/2022
// Path: 4_14_2022.js
// Time: like 10mins for the bug
// Description: submitBet api was returning the bet value as a string not a number