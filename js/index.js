// Happy New Year!!!
//
// Basically I just combined three great ideas :)
// Canvas Snow, Countdown and Text Background Animation with CSS
//
// This awesome Canvas Snow was created along with Paul Lewis:
// https://www.youtube.com/watch?v=VW8qoyYzWGg&t
//
class Snowflake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.radius = 0;
    this.alpha = 0;

    this.reset();
  }

  reset() {
    this.x = this.randBetween(0, window.innerWidth);
    this.y = this.randBetween(0, -window.innerHeight);
    this.vx = this.randBetween(-3, 3);
    this.vy = this.randBetween(2, 5);
    this.radius = this.randBetween(1, 4);
    this.alpha = this.randBetween(0.1, 0.9);
  }

  randBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.y + this.radius > window.innerHeight) {
      this.reset();
    }
  }
}

class Snow {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", () => this.onResize());
    this.onResize();
    this.updateBound = this.update.bind(this);
    requestAnimationFrame(this.updateBound);

    this.createSnowflakes();
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  createSnowflakes() {
    const flakes = window.innerWidth / 4;

    this.snowflakes = [];

    for (let s = 0; s < flakes; s++) {
      this.snowflakes.push(new Snowflake());
    }
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let flake of this.snowflakes) {
      flake.update();

      this.ctx.save();
      this.ctx.fillStyle = "#FFF";
      this.ctx.beginPath();
      this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      this.ctx.closePath();
      this.ctx.globalAlpha = flake.alpha;
      this.ctx.fill();
      this.ctx.restore();
    }
    requestAnimationFrame(this.updateBound);
  }
}

new Snow();

var strings = [
	[
		'Дарить немножко радости текстом на сайте – это моя традиция.^1500'
	],
	[
		'А тут еще и снежок легкий ^150:)^650'
	],
	[
		'Игорь. ^600Хочу поздравить ^100тебя с новым годом. ^400Мы теперь совсем взрослые, ^150два магистра.^1200'
	],
	[
		'Я желаю тебе счастья,^450',
		'Я желаю тебе здоровья,^400',
		'Я желаю тебе всего-всего, ^200что ты сам можешь себе ^300и окружающим пожелать.^1000',
	],
	[
		'Я надеюсь, ^200что мы станем больше общаться. И станем совсем неразлучными ^300;)^1000',
	],
	[
		'Спасибо тебе за то, ^300что ты есть.^300'
	],
	[
		'Надеюсь на встречу в новом году.^1500'
	],
	[
		'Обожаю тебя^2000',
		'С новым годом! ^600♥^9999999'
	]
	
]
var params = {
	smartBackspace: true,
	typeSpeed: 60,
	backSpeed: 40,
	backDelay: 200,
	startDelay: 1000
}

setTimeout(function () {
	typings.type(0);
}, 0);


var typings = {
	type: (index) => {
		let p = Object.assign({}, params);
		p.strings = strings[index];
		
		p.onComplete = () => {
			typings.hide(index);
			setTimeout(() => {
				if (strings.length > index+1)
					typings.type(index+1);
			}, 1500);
		}
		
		var typed = new Typed('#typing-' + index, p);
	},
	hide: (index) => {
		$('.typing-' + index).addClass('hidden');
		setTimeout(() => {
			$('.typing-' + index).hide();
		}, 1100);
	}
}