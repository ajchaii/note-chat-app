var generateMessage = (from, text) => {
  var date = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();
  var hour = new Date().getHours();
  var min = new Date().getMinutes();
  var sec = new Date().getSeconds();
  return {
      from,
      text,
      createdAt: `${date}/${month}/${year}, ${hour}:${min}:${sec}`
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
