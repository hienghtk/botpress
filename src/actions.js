const GDM = require('google-distance')


/**
 * Description of the action goes here
 */
async function calculateDistance(state, event) {
	// calculate the distance using Google Distance Matrix API
	// var distance = 0;
	// GDM.apiKey = 'AIzaSyDU-CBlCzI5OutcBP6hv8WIy4qOjbuO5-k';
	await GDM.get({
		origin: state.origin,
		destination: state.dest
	}, function(err, data) {
		if(err) {
			// cần sửa
			event.reply("#builtin_text",{text: "Địa chỉ bạn nhập vào có lỗi, vui lòng nhập lại"});
		}
		else {
			event.reply("#builtin_text", {text: "Khoảng cách giữa 2 địa điểm là " + data.distanceValue.toString() + " m"});
		}
	})
	
}

/**
 * Get package weight
 */
function setWeight(state, event) {
	const weight = parseFloat(event.text.match(/(([0-9]*[.])?[0-9]+)/g), 10);
	event.reply("#builtin_text", {text: "Khối lượng nhập vào là " + weight.toString()});
	return {
	  	...state,
	  	weight: weight
  	}
}

/**
 * Get sender address
 */
function setSenderAddress(state, event) {
	const address = event.text;	
	event.reply("#builtin_text", {text: "Địa chỉ người gửi là: " + address});
	return {
		...state,
		origin: address
	}
}

/**
 * Get recipient address
 */
function setRecipientAddress(state, event) {
	const address = event.text;	
	event.reply("#builtin_text", {text: "Địa chỉ người nhận là: " + address});
	return {
		...state,
		dest: address
	}
}

/**
 * Try to load existed database
 */
// async function loadDatabase(state, event) {
// 	const address = params.dest;	
// 	const knex = await bp.db.get('questions');
// }


module.exports = { 
	calculateDistance,
	setWeight,
	setRecipientAddress,
	setSenderAddress
}
