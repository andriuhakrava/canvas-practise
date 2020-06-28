function makeCanvas(){
	// Get objects
	var canvas1 = document.getElementById('canvas1');
	var ctx1 = canvas1.getContext('2d'); //create context

	//Set properties
	ctx1.font = '32pt Arial'; // parameters for font
	ctx1.fillStyle = 'DeepSkyBlue'; //color of the text
	ctx1.strokeStyle = 'black'; //color of the stroke

	//Action
	ctx1.fillText('I love Circle', 45, 150);    //function for text, parameters: 1-text, 2-x, 3-y 
	ctx1.strokeText('I love Circle', 45, 150);	//function for stroke, parameters: 1-text, 2-x, 3-y

	//Canvas 2 - squares
	var canvas2 = document.getElementById('canvas2');
	var ctx2 = canvas2.getContext('2d'); //create context

	//Set properties
	ctx2.fillStyle = '#ff0000'; //color of the square
	ctx2.strokeStyle = 'black'; //color of the square's stroke
	ctx2.lineWidth = '10';      //width of the square's stroke

	//Action
	//first rectangle
	ctx2.fillRect(45, 5, 135, 135); // param1 - x, param2 - y, param3,param4 - size of rectangle 
	ctx2.strokeRect(45, 5, 135, 135);

	//second rectangle
	ctx2.fillStyle = '#666';
	ctx2.fillRect(200, 0, 135, 135);

	//third rectangle
	ctx2.fillStyle = '#666';
	ctx2.fillRect(45, 150, 135, 135);

	//fourth rectangle
	ctx2.fillStyle = '#ff0000';
	ctx2.strokeStyle = 'black';
	ctx2.lineWidth = '10';
	ctx2.fillRect(200, 150, 135, 135);
	ctx2.strokeRect(200, 150, 135, 135);

	//Canvas 3 - lines
	var canvas3 = document.getElementById('canvas3');
	var ctx3 = canvas3.getContext('2d');

	ctx3.strokeStyle = '#666';
	ctx3.fillStyle = '#ff0000';
	ctx3.lineWidth = 5;

	ctx3.beginPath();						
	ctx3.moveTo(100, 100); // start point
	ctx3.lineTo(150, 200); // drawing line
	ctx3.lineTo(200, 200);
	ctx3.lineTo(200, 290);
	ctx3.lineTo(290, 290);
	ctx3.lineTo(290, 100);
	ctx3.lineTo(100, 100); // end point
	ctx3.stroke();
	ctx3.fill();
	ctx3.closePath();

	//Canvas 4 - circles
	var canvas4 = document.getElementById('canvas4');
	ctx4 = canvas4.getContext('2d');

	//first circle
	ctx4.fillStyle = 'blue';

	ctx4.beginPath();
	ctx4.arc(200, 30, 25, 0, 2*Math.PI); //param1 - x, param2 - y, param3 - radius
	ctx4.fill();
	ctx4.closePath();

	//second circle
	ctx4.fillStyle = 'red';
	ctx4.beginPath();
	ctx4.arc(200, 100, 45, 0, 2*Math.PI); 
	ctx4.fill();
	ctx4.closePath();

	//third circle
	ctx4.fillStyle = 'black';
	ctx4.beginPath();
	ctx4.arc(200, 220, 75, 0, 2*Math.PI); 
	ctx4.fill();
	ctx4.closePath();

	//Canvas 5 - with animations
	var canvas5 = document.getElementById('canvas5');
	var ctx5 = canvas5.getContext('2d');
	var posX = 0;
	var posY = 0;

	setInterval(function(){
		posX++;
		posY++;
		ctx5.fillStyle = 'black';
		ctx5.fillRect(0, 0, canvas5.width, canvas5.height); // start on top-left corner, width/height of all canvas

		ctx5.fillStyle = 'white';
		ctx5.beginPath();
		ctx5.arc(posX, 120, 55, 0, 2*Math.PI);
		ctx5.fill();
		ctx5.closePath();

		ctx5.fillStyle = 'red';
		ctx5.beginPath();
		ctx5.arc(150, posY, 55, 0, 2*Math.PI);
		ctx5.fill();
		ctx5.closePath();

		ctx5.fillStyle = 'blue';
		ctx5.beginPath();
		ctx5.arc(350, posY, 55, 0, 2*Math.PI);
		ctx5.fill();
		ctx5.closePath();
	}, 30)
}

	
