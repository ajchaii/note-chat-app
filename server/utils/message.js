var moment = require('moment');
var date = moment();
var generateMessage = (from, text) => {
  return {
    from,
    text,
    //createdAt: new Date().getTime()
    createdAt: date.format('LLLL')
  };
};

var generateLocationMessage = (from, latitude, longitude) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: new Date().getTime()
  };
};

module.exports = {generateMessage, generateLocationMessage};
