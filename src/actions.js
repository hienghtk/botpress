const GDM = require('google-distance')


/**
 * Description of the action goes here
 * @param  {String} params.origin={{state.origin}} Address of the sender
 * @param  {String} params.dest={{state.dest}} Address of recipient 
 */
async function calculateDistance(state, event, params) {
	// calculate the distance using Google Distance Matrix API
	// var distance = 0;
	// GDM.apiKey = 'AIzaSyDU-CBlCzI5OutcBP6hv8WIy4qOjbuO5-k';
	await GDM.get({
		origin: params.origin,
		destination: params.dest
	}, function(err, data) {
		if(err) {
			// cần sửa
			//event.reply("Địa chỉ bạn nhập vào có lỗi, vui lòng nhập lại");
		}
		else {
			//event.reply("Với khoảng cách ${data.distanceValue} m, bạn sẽ phải trả ${data.distanceValue} đồng.");
		}
	})
	
}

/**
 * Get package weight
 * @param  {String} params.weight={{event.text}} The weight of the package customer sent
 */
function setWeight(state, event, params) {
	const weight = parseFloat(params.weight.match(/(([0-9]*[.])?[0-9]+)/g), 10);
	return {
	  	...state,
	  	weight: weight
  	}
}

/**
 * Get sender address
 * @param  {String} params.origin={{event.text}} The address of the sender
 */
function setSenderAddress(state, event, params) {
	const address = params.origin;	
	return {
		...state,
		origin: address
	}
}

/**
 * Get recipient address
 * @param  {String} params.dest={{event.text}} The address of the recipient
 */
function setRecipientAddress(state, event, params) {
	const address = params.dest;	
	return {
		...state,
		dest: address
	}
}

/**
 * Get recipient address
 */
async function loadDatabase(state, event) {
	const address = params.dest;	
	const knex = await bp.db.get('questions');
}


module.exports = { 
	calculateDistance,
	setWeight,
	setRecipientAddress,
	setSenderAddress
}
