var fs = require('fs');
var lines = fs.readFileSync('shiver.txt').toString().split("\n");
var colors = require('colors')

var instruments = {
	crash: ['cr'],
	ride: ['rd'],
	snare: ['sn'],
	bass: ['bd']
};

var config = {
	measure: ['|']
};

for(j in lines) {

  console.log(lines[j]);

  var line = lines[j];

  for (var i=0; i < line.length; i++) {
    console.log(line.charAt(i));
 	}

}
