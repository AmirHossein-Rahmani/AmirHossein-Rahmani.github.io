window.initTreeAnimation = function() {
  const canvas = document.getElementById('treeCanvas');
  if (!canvas) return;
  
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '0';
  canvas.style.pointerEvents = 'none';
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const branches = [];
  const maxBranches = 80;
  const chars = '01$%#@&*';

  class Branch {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.length = Math.random() * 72 + 36;
      this.angle = Math.random() * Math.PI * 2;
      this.speed = Math.random() * 0.9 + 0.36;
      this.opacity = Math.random() * 0.3 + 0.1;
      this.char = chars[Math.floor(Math.random() * chars.length)];
    }

    update() {
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;
      
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#ffffff';
      ctx.font = '25px monospace';
      ctx.fillText(this.char, this.x, this.y);
      ctx.restore();
    }
  }

  for (let i = 0; i < maxBranches; i++) {
    branches.push(new Branch());
  }

  function animate() {
    ctx.fillStyle = 'rgba(26, 26, 26, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    branches.forEach(branch => {
      branch.update();
      branch.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
};