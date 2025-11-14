function Hero() {
  try {
    const [visible, setVisible] = React.useState(false);
    const [typedText, setTypedText] = React.useState('');
    const fullText = 'AmirHossein\nRahmani';
    
    React.useEffect(() => {
      setTimeout(() => setVisible(true), 100);
      
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);
      
      return () => {
        clearInterval(typingInterval);
      };
    }, []);

    return (
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        data-name="hero"
        data-file="components/Hero.js"
        style={{
          backgroundColor: '#BEC0BD',
          boxShadow: '0 24px 80px rgba(0, 0, 0, 0.18)'
        }}
      >
        <div 
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        ></div>
        <canvas id="rainCanvas"></canvas>

        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 md:mb-12 leading-tight text-[#2a2a2a]" style={{fontFamily: 'Courier Prime, monospace'}}>
                {typedText.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index === 0 && <br />}
                  </React.Fragment>
                ))}
                <span className="cursor-pen">|</span>
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 text-center relative overflow-hidden"
                  style={{
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)'
                    }}
                  ></div>
                  <span className="relative z-10">Contact</span>
                </button>
                <a 
                  href="cv.html"
                  className="px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 inline-block text-center relative overflow-hidden"
                  style={{
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)'
                    }}
                  ></div>
                  <span className="relative z-10">CV</span>
                </a>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="relative">
                <img 
                  src="https://app.trickle.so/storage/public/images/usr_17bd142760000001/d5a46ccc-9b33-44ba-a07c-1c99b62b8af6.png"
                  alt="AmirHossein Rahmani"
                  className="w-full max-w-lg mx-auto object-cover relative z-0"
                  style={{
                    maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 75%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}