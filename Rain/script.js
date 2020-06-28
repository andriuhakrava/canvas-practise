let ScreenSize = {
	width: 1500,
	height: 600
};

let getRandomValue = function(min, max){
	return Math.random() * (max - min) + min;
};

let Raindrop = function(){
	this._reset();
}

Raindrop.prototype.render = function(ctx){
	ctx.strokeStyle = 'white';
	ctx.beginPath();
	ctx.moveTo(this.x, this.y);
	ctx.lineTo(this.x + this.size, this.y - this.size);
	ctx.closePath();
	ctx.stroke();
};

Raindrop.prototype.update = function(){
	this.x += this.hVelocity;
	this.y += this.velocity;

	if (this.isOffscreen()){
		this._reset();
	}
};

Raindrop.prototype.isOffscreen = function(){
	return this.y > ScreenSize.height + this.size || 
				this.x > ScreenSize.width + this.size || 
				this.x < -this.size;
};

Raindrop.prototype._reset = function(){
	this.size = getRandomValue(1, 6);

	this.x = getRandomValue(-ScreenSize.width * 0.3, ScreenSize.width * 1.6);
	this.y = getRandomValue(-ScreenSize.height, 0);

	this.velocity = this.size;
	this.hVelocity = -this.size/3;
}

let Cucumber = function(){
	Raindrop.call(this);
};

Cucumber.prototype = Object.create(Raindrop.prototype);

Cucumber.prototype.render = function(ctx){
	ctx.fillStyle = 'green';
	ctx.beginPath();
	ctx.ellipse(this.x, this.y, this.size, this.size * 3, this.angle, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fill();
};

Cucumber.prototype.update = function(){
	Raindrop.prototype.update.call(this);
	this.angle += 0.01;
};

Cucumber.prototype._reset = function(){
	Raindrop.prototype._reset.call(this);
	this.angle = getRandomValue(0, Math.PI * 2);
};

let cleanupFrame = function(ctx){
	ctx.clearRect(0, 0, ScreenSize.width, ScreenSize.height);
};

// let renderFrame = function(ctx, raindrops){
// 	cleanupFrame(ctx);
// 	requestAnimationFrame(renderFrame.bind(null, ctx, snowflakes));
// }
let renderFrame = function(ctx, raindrops){
	cleanupFrame(ctx);

	raindrops.forEach(function(it){
		it.render(ctx);
		it.update();
	});

	requestAnimationFrame(renderFrame.bind(null, ctx, raindrops));
};

let setup = function(){
	const drops = 600;
	const cucumber_ratio = 0.2;
	let canvas = document.querySelector('#playground');
	let ctx = canvas.getContext('2d');

	canvas.width = ScreenSize.width;
	canvas.height = ScreenSize.height;

	let raindrops = new Array(drops * (1 - cucumber_ratio)).fill('').map(function(){
		return new Raindrop();
	}).concat(new Array(drops * cucumber_ratio).fill('').map(function(){
		return new Cucumber();
	}));

	renderFrame(ctx, raindrops);
};

setup();