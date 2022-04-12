const handleBankerDiceStart = () => {

	console.log("testing case: " + bScoreRef.current)

	if (bScoreRef.current === null || bScoreRef.current === -1 || bScoreRef.current === 0) {
		intervalID.current = setInterval(() => {

			if (bScoreRef.current !== null && bScoreRef.current !== -1 && bScoreRef.current !== 0) {
				console.log("stop dice case: " + bScoreRef.current)
				clearInterval(intervalID.current);
				return;
			}
			console.log("roll dice case: " + bScoreRef.current)
			ref1.current.rollDice();
			ref2.current.rollDice();
			ref3.current.rollDice();
		}, 3000);
	}
	else {
		console.log("dice not rolling as condition is false")
	}
}

// Language: javascript
// Date: 4/13/2022
// Path: 4_13_2022.js
// Time: like 10mins for the bug, ~5hrs for the entire implementation of auto roll with proper hooks
// Description: had to add return statement to prevent the function from running when the condition is false. CANNOT BREAK OUT OF LOOP IN TS