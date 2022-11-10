const CustomAPIError = require("./custome-api");
const UnauthenticatedError = require("./unauthenticted");
const NotFoundError = require("./not-found");
const BadRequestError = require("./bad-request");
module.exports = {
	CustomAPIError,
	UnauthenticatedError,
	NotFoundError,
	BadRequestError,
};
