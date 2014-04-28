var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');

(function(){
})();

request('http://www.ultimate-guitar.com/top/top100_drum_tab.htm', function(error, response, body) {

	if (!error && response.statusCode == 200) {

		$ = cheerio.load(body);

		var links = $('a[href*="drum_tab.htm"]');

		for(var i = 0; i < links.length; i++) {

			(function(){

				var options = {
				    url: links.eq(i).attr('href'),
				    headers: {
				    	'Host':'tabs.ultimate-guitar.com',
			    		'Referer':'http://www.ultimate-guitar.com/top/top100_drum_tab.htm',
			        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36',
			        'Cookie': '__qca=P0-1719133130-1395282078394; optimizelyEndUserId=oeu1396027111085r0.9203665293753147; optimizelySegments=%7B%22750662588%22%3A%22search%22%2C%22750762857%22%3A%22gc%22%2C%22750822929%22%3A%22false%22%7D; optimizelyBuckets=%7B%7D; bblastvisit=1395282070; bblastactivity=1397182690; SESSIONUG=td87857e7n32bf4ufm69j8fqf3; targus.unmatched=1; targus.matched=1; targus.segment=046; targus.zip=10019; targus.BirthYear=1975; targus.gender=F; targus.ap_seg=; SS_ARE_Override.traceLevel=WARN; acudeoSession.=%7B%22time%22%3A1398458176272%2C%22adIndex%22%3A28%7D; jamplay_show=3; UGSESSION=o6nupc8b2oisv5h82qq6iq6781; __gads=ID=40d0a132913abcf0:T=1398647778:S=ALNI_MaV1GrSy-89nKL2hbeXOWR_sc66pg; mojo_takeover=1; tabs_history=%5B%7B%22id%22%3A859029%2C%22artist%22%3A%22Nirvana%22%2C%22name%22%3A%22Smells%20Like%20Teen%20Spirit%22%2C%22url%22%3A%22%2Fn%2Fnirvana%2Fsmells_like_teen_spirit_drum_tab.htm%22%2C%22v%22%3A1%2C%22type%22%3A%22Drum%20Tabs%22%7D%2C%7B%22id%22%3A863205%2C%22artist%22%3A%22Weezer%22%2C%22name%22%3A%22The%20World%20Has%20Turned%20And%20Left%20Me%20Here%22%2C%22url%22%3A%22%2Fw%2Fweezer%2Fthe_world_has_turned_and_left_me_here_drum_tab.htm%22%2C%22v%22%3A1%2C%22type%22%3A%22Drum%20Tabs%22%7D%2C%7B%22id%22%3A29371%2C%22artist%22%3A%22Weezer%22%2C%22name%22%3A%22Burndt%20Jamb%22%2C%22url%22%3A%22%2Fw%2Fweezer%2Fburndt_jamb_ver4_tab.htm%22%2C%22v%22%3A4%2C%22type%22%3A%22Tabs%22%7D%2C%7B%22id%22%3A134396%2C%22artist%22%3A%22Interpol%22%2C%22name%22%3A%22Nyc%22%2C%22url%22%3A%22%2Fi%2Finterpol%2Fnyc_ver2_tab.htm%22%2C%22v%22%3A2%2C%22type%22%3A%22Tabs%22%7D%2C%7B%22id%22%3A859608%2C%22artist%22%3A%22Coldplay%22%2C%22name%22%3A%22Shiver%22%2C%22url%22%3A%22%2Fc%2Fcoldplay%2Fshiver_drum_tab.htm%22%2C%22v%22%3A1%2C%22type%22%3A%22Drum%20Tabs%22%7D%5D; first_visit_page=aHR0cDovL3BsdXMudWx0aW1hdGUtZ3VpdGFyLmNvbS9qYW1ndXJ1Lw==; first_visit_time=1398648713; _ym_visorc_23948206=b; __utma=95998531.487090309.1395282078.1398457182.1398647610.10; __utmb=95998531.21.10.1398647610; __utmc=95998531; __utmz=95998531.1398457182.9.7.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); _ym_visorc_18746557=b'
				    }
				};

				request(options, function (error, response, body) {
				  if (!error && response.statusCode == 200) {

						$ = cheerio.load(body);

						fs.writeFile("./tabs/" + encodeURIComponent($('.t_title h1').text()) + ":::" + encodeURIComponent($('.t_autor a').text()) + ".txt", $('#cont pre').eq(2).html(), function(err) {
					    if(err) {
					        console.log(err);
					    } else {
					        console.log("The file was saved!");
					    }
						});


				  }
				});

			})();

		}

	}

});
/*
*/
