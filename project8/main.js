const canvas = document.getElementById('canvas');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const ctx = canvas.getContext('2d');

const numOfCircles = document.getElementById('numOfCircles');

numOfCircles.setAttribute('min', 50)
numOfCircles.setAttribute('max', 800)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
        particleArray.push(new Particle())
    }
})

class Particle{
    constructor(){
        // 
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random()* 20 + 1;
        this.speedX = Math.random()* 3 - 1.5;
        this.speedY = Math.random()* 3 - 1.5;
    }

    update(){
        this.x +=this.speedX;
        this.y +=this.speedY;

        if(this.x + this.speedX > canvas.width - this.size || this.x 
            + this.speedX < this.size)
        {
            this.speedX = -this.speedX;
        }
        if(this.y + this.speedY > canvas.height - this.size || this.y 
            + this.speedY < this.size)
        {
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

function handle(){
    for(let i =0; i < particleArray.length; i++){
        particleArray[i].draw()
        particleArray[i].update();
    }
}

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    handle();
    requestAnimationFrame(animate);
}

animate();

startBtn.addEventListener('click', () =>{
    
    
  })

  resetBtn.addEventListener('click', () =>{

  
  })
