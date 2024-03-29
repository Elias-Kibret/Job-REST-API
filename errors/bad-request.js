const CustomAPIError = require("./custome-api");

class BadRequestError extends CustomAPIError {
	constructor(message) {
		super(message);
		this.statusCode = 403;
	}
}

module.exports = BadRequestError;
