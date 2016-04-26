// Require the JSON with the Google Fonts
var fonts = require('./google-fonts.json');
var toArray = require('json-to-array');

// Google Font Pattern
// Roboto:400,300,300italic,400italic,500,500italic,700,700italic,900,900italic,100italic,100

var fontList = toArray(fonts);

console.log('There\'s a total amount of ' + fontList.length + ' Google fonts in google-fonts.json');

var fontListString = '';
var fontsPerFile = 100;
var fontCount = 0;
var fileNumber = 1;

fontList.forEach(function(font){

	var name = font[0];

	/*if(name !== 'Roboto')
		return;*/

	/**
	* font[0] -> Nombre
	* font[1] -> Parámetros del objecto
	**/

	//console.log(font[0])
	//console.log(font[1].variants);
	
	var variants = toArray(font[1].variants);

	var stringVariants = '';

	var actualVariant;

	variants.forEach(function(variant){

		//console.log(variant[0]);
		actualVariant = variant[0];

		var weights = toArray(variant[1]);

		weights.forEach(function(weight){

			//console.log(weight[0]);

			if(actualVariant !== 'normal')
				stringVariants += weight[0] + '' + actualVariant + ',';
			else
				stringVariants += weight[0] + ',';

		});

	});

	//console.log(variants);
	

	//console.log('----------');
	//console.log(name + ':' + stringVariants);

	fontListString += name + ':' + stringVariants + '\n';

	fontCount++;

	if(fontCount % fontsPerFile === 0 || fontCount === fontList.length){
		console.log('Font count:', fontCount);
		console.log('Fonts por file:', fontsPerFile);
		console.log('File number:', fileNumber);
		console.log('----');
		makeFile(fileNumber);
		fileNumber++;
		fontListString = '';
	}

});

function makeFile(number){
	var fs = require('fs');
	fs.writeFile("./dist/fonts.list." + number, fontListString, function(err) {
	    if(err) return console.log(err);
	    console.log('The file fonts.list.' + number + ' was saved!');
	}); 
}

