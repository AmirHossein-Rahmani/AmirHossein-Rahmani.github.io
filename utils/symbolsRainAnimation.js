window.initSymbolsRainAnimation = function() {
  const canvas = document.getElementById('symbolsRainCanvas');
  if (!canvas) return;
  
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '1';
  canvas.style.pointerEvents = 'none';
  
  const ctx = canvas.getContext('2d');
  
  const updateCanvasSize = () => {
    const section = document.querySelector('[data-name="expertise"]');
    if (section) {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    }
  };
  
  updateCanvasSize();

  const symbols = ['∫', '∂', '$', 'ℏ', '∑', 'π', '∆', '∞', 'α', 'β', '∈', '≈'];
  const drops = [];
  const maxDrops = 50;

  class SymbolDrop {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * -canvas.height;
      this.speedX = Math.random() * -2 - 1;
      this.speedY = Math.random() * 0.5 + 0.3;
      this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
      this.opacity = Math.random() * 0.3 + 0.15;
      this.fontSize = Math.random() * 16 + 20;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = Math.random() * 2 - 1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.rotation += this.rotationSpeed;
      
      if (this.x < -50 || this.y > canvas.height) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = '#2a2a2a';
      ctx.font = `${this.fontSize}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.symbol, 0, 0);
      ctx.restore();
    }
  }

  for (let i = 0; i < maxDrops; i++) {
    drops.push(new SymbolDrop());
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