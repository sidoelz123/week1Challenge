'use strict';

// response Success
exports.ok = function(values, res) {
  var data = {
      'status': 200,
      'values': values
  };

  res.json(data); // data to json files
  res.end(); // end connect to databases after displayed to json
};

