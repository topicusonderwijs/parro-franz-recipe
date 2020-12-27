
const path = require('path');

module.exports = Franz => {

	// inject a single css file
	Franz.injectCSS(path.join(__dirname, 'service.css'));

};