
// Language: javascript
// Date: 4/23/2022
// Path: 4_23_2022.js
// Time: 1hr
// Description: learning status codes
// Code:
// export default function handler(req, res) {
// 	// console.log(req.body.bet);
// 	// console.log(res);
// 	const body = req.body;
// 	// console.log(body);
// 	if (!body.bet) {
// 		return res.status(500).json({ msg: 'Bet amount not available/zero' });
// 	}
// 	if (body.bet < 0) {
// 		return res.status(500).json({ msg: 'Bet amount less than zero' });
// 	}
// 	return res.status(200).json({ bet: `${body.bet}` });

// I kept trying to debug with a bet value of 0 (did not implement change bet function yet)
// and I didn't get any log/message with status code 500 but it turns out 500 does not 
// return anything as its a generic error response.



// Language: English
// Date: 4/23/2022
// Path: 4_23_2022.js
// Time: 5 min
// Description: Saw a cool word on reddit: 
// "frivolous: not having any serious purpose or value."
// "frivolity: lack of seriousness; lightheartedness."



// Language: javascript
// Date: 4/23/2022
// Path: 4_23_2022.js
// Time: 10 min
// Description: Finding out JIT (just in time) usage in tailwind
// Code:
// The JIT (just in time) mode generates the CSS as you need it. So instead of generating all the classes then purging unused ones, it only generates utilities as you use them. This means it's both stupidly fast and can be used to create arbitrary classes on the fly.
// If you enable JIT, you can use these classes:
{/* <div class="inline-block min-h-[1rem]">
    content...
</div> */}
// The brackets denotes that this is an arbitrary value not in the config.
