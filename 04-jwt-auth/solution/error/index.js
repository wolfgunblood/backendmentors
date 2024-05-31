const CustomAPIError = require('./error')
const BadRequest = require('./bad-request')
const UnauthenticatedError = require('./unauthenticated')

module.exports = {
    CustomAPIError,
    BadRequest,
    UnauthenticatedError
}