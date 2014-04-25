var fs = require('fs');
var file = fs.readFileSync('shiver.txt');
var colors = require('colors')

var config = {
  measure: '|'
};

/*
var measure = 16 arrays of 4 beats
measure = {
  sounds: [],

}
*/
var Parser = function(file) {

  var self = this;
  var lines = file.toString().split("\n");
  var bundles = [];
  var beats = [];

  self.init = function() {

    var bundle = [];
    var beat = 0;
    var measure_first_beat = 0;

    for(j in lines) {

      if(j < 50) {

        var line = lines[j];
        var measures = line.split(config.measure);

        // make sure line has at least two measure delimeters
        if((measures.length - 1) > 2) {

          measures.pop();
          bundle.push(measures);

        } else {

          // parse the bundle
          if(bundle.length) {

            // each block of instruments

            /*
            [ 'Cr', 'x-----------', '------------' ]
            [ 'Rd', '--xxx-x-x-x-', 'x-xxx-x-x-x-' ]
            [ 'Sn', '------o-----', '------o-----' ]
            [ 'Bd', 'o---------o-', 'o-----------' ]
            */

            measure_first_beat = beat;

            for(var k in bundle) {

              beat = measure_first_beat;

              // each instrument

              /*
              [ 'Cr', 'x-----------', '------------' ]
              */

              for(var l = 1; l < bundle[k].length; l++) {

                // each group of notes
                /*
                [ 'x-----------', '------------' ]
                */

                console.log(bundle[k][l])

                for (var m = 0; m < bundle[k][l].length; m++) {

                  // each letter
                  /*
                  [ 'x', '-', '-', '-', '-', '-', etc...]
                  */

                  if(typeof beats[beat] == "undefined") {
                    beats[beat] = {};
                  }

                  beats[beat][bundle[k][0].toLowerCase()] = bundle[k][l][m];

                  beat++;

                }

              }

            }

            bundle = [];

          }

        }

      }

    }

    console.log(beats);

  };

  self.init();

  return self;

};

var a_parser = new Parser(file);
