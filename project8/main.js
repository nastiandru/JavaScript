const canvas = document.getElementById('canvas');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const ctx = canvas.getContext('2d');

const numOfCircles = document.getElementById('numOfCircles');

const canvasHeightInput = document.getElementById('canvasHeight');
const canvasWidthInput = document.getElementById('canvasWidth');

// numOfCircles.setAttribute('min', 30)
// numOfCircles.setAttribute('max', 500)

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

window.addEventListener('resize', () =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

const particleArray =[];

const mouse={
    x: undefined,
    y: undefined,
};

canvas.addEventListener('click', (e) =>{
    mouse.x = e.x;
    mouse.y = e.y;

    for(let i = 0; i < 2; i++){
        particleArray.push(new Particle(false))
    }
})

class Particle {

    size = Math.random() * 20 + 1;
    speedX = Math.random() * 3 - 1.5;
    speedY = Math.random() * 3 - 1.5;

    constructor(random) {
        if (random) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
        } else {
            this.x = mouse.x;
            this.y = mouse.y;
        }
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x + this.speedX > canvas.width - this.size || this.x
            + this.speedX < this.size) {
            this.speedX = -this.speedX;
        }
        if (this.y + this.speedY > canvas.height - this.size || this.y
            + this.speedY < this.size) {
            this.speedY = -this.speedY;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = "white"
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill();
        ctx.closePath();
    }
}


function drawLines(){
    for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
          let distance =
            ((particleArray[a].x - particleArray[b].x) *
              (particleArray[a].x - particleArray[b].x)) +
            ((particleArray[a].y - particleArray[b].y) *
              (particleArray[a].y - particleArray[b].y));
          if (distance < ((canvas.width / 7) * canvas.height) / 7) {
            ctx.strokeStyle = "#FFFFFF";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particleArray[a].x, particleArray[a].y);
            ctx.lineTo(particleArray[b].x, particleArray[b].y);
            ctx.stroke();
          }
        }
      }
}

function handle(){
    for(let i =0; i < particleArray.length; i++){
        particleArray[i].draw()
        particleArray[i].update();
    }
}

const init = () => {
    for (let i = 0; i < Number(numOfCircles.value); i++) {
        particleArray.push(
            new Particle(true)
        );
    }
}

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    handle();
    requestAnimationFrame(animate);
    drawLines();
}



startBtn.addEventListener('click', () =>{
    canvasHeightInput.setAttribute('max', window.innerHeight)
    canvasHeightInput.setAttribute('min', (window.innerHeight) / 5)
    canvasWidthInput.setAttribute('max', window.innerWidth)
    canvasWidthInput.setAttribute('min', (window.innerWidth) / 5)
    canvas.height= canvasHeightInput.value || window.innerHeight;
    canvas.width= canvasWidthInput.value || window.innerWidth;
    init();
    animate();
    startBtn.disabled = true
    
  })

  resetBtn.addEventListener('click', () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = ''
    canvas.height = ''
    startBtn.disabled = false

  })
