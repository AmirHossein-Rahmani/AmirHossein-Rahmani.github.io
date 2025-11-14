window.initRainAnimation = function() {
  const canvas = document.getElementById('rainCanvas');
  if (!canvas) return;
  
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '5';
  canvas.style.pointerEvents = 'none';
  
  const ctx = canvas.getContext('2d');
  
  const updateCanvasSize = () => {
    const heroSection = document.querySelector('[data-name="hero"]');
    if (heroSection) {
      canvas.width = heroSection.offsetWidth;
      canvas.height = heroSection.offsetHeight;
    }
  };
  
  updateCanvasSize();

  const drops = [];
  const chars = ['%', '$', '#', '@', '&', '1', '!'];
  const maxDrops = 120;

  class Drop {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * 80;
      this.y = Math.random() * -canvas.height;
      this.speed = Math.random() * 1.5 + 0.8;
      this.char = chars[Math.floor(Math.random() * chars.length)];
      this.opacity = Math.random() * 0.4 + 0.2;
      this.fontSize = Math.random() * 12 + 16;
    }

    update() {
      this.y += this.speed;
      if (this.y > canvas.height) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = '#000000';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#000000';
      ctx.font = `${this.fontSize}px monospace`;
      ctx.fillText(this.char, this.x, this.y);
      ctx.restore();
    }
  }

  for (let i = 0; i < maxDrops; i++) {
    drops.push(new Drop());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drops.forEach(drop => {
      drop.update();
      drop.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', updateCanvasSize);
};
