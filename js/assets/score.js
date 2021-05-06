class Score {
    constructor(ctx) {
     
      this.ctx = ctx;
      
      this.x = 30;
      this.y = 20;
      this.value = 0;

      this.w = 50;
      this.h = 35;
      // this.vx = 0; //

      this.img = new Image();
      this.img.tick = 0;
      this.img.frames = 8;
      this.img.frameIndex = 0;
      this.img.src = './images/bonus.png';

      
    }
  
    draw() {
      this.img.tick++;

      if (this.img.tick >= 5) {
        this.img.tick = 0;
        this.animate();
      } 
      

      this.ctx.drawImage(
        //this.ctx.drawImage( img, sx, sy, sw, sh, dx, dy, dw, dh); //
        this.img,
        this.img.frameIndex * this.img.width / this.img.frames,
        0,
        this.img.width / 8,
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h
      );

        this.ctx.font = "bold 30px Verdana";
        /*var gradient = this.ctx.createLinearGradient(this.x, this.y, this.w, this.h);
        gradient.addColorStop("0.8"," magenta");
        gradient.addColorStop("0.5", "black");
        gradient.addColorStop("1.0", "red");*/
        
        this.ctx.fillStyle = "#900c3f";
        this.ctx.fillText(` ${this.value}`, this.x + 45 , this.y + 30);
    }
  
    /*move() {
      this.x += this.vx;
      
    }*/
  
    /*isVisible() {
      return (
        this.y < this.ctx.canvas.height &&
        this.y > 0 - this.h
      );
    }*/

    animate() {
        this.img.frameIndex++;
        if (this.img.frameIndex >= this.img.frames) {
          this.img.frameIndex = 0
        }
      }
    
  }


