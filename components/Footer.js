function Footer() {
  try {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    React.useEffect(() => {
      if (window.initFooterRainAnimation) {
        window.initFooterRainAnimation();
      }
    }, []);

    return (
      <footer 
        className="text-white py-16 px-6 relative"
        style={{
          background: window.location.pathname.includes('content.html') 
            ? 'rgba(26, 26, 26, 0.3)' 
            : '#1a1a1a',
          backdropFilter: window.location.pathname.includes('content.html') 
            ? 'blur(20px)' 
            : 'none',
          WebkitBackdropFilter: window.location.pathname.includes('content.html') 
            ? 'blur(20px)' 
            : 'none',
          border: window.location.pathname.includes('content.html') 
            ? '1px solid rgba(255, 255, 255, 0.2)' 
            : 'none'
        }}
        data-name="footer"
        data-file="components/Footer.js"
      >
        <canvas id="footerRainCanvas"></canvas>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://app.trickle.so/storage/public/images/usr_17bd142760000001/c11a8e60-8fbf-4a49-9135-41f4af23b803.png" 
                  alt="AmirHossein Rahmani" 
                  className="h-12 w-auto"
                  style={{filter: 'brightness(0) invert(1)'}}
                />
                <span className="text-3xl text-white" style={{fontFamily: 'Caveat, cursive', fontWeight: '700'}}>Amir.H Rahmani</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Expert economist specializing in economic analysis, financial research, and policy evaluation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('expertise')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Expertise
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <a 
                    href="cv.html"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    CV
                  </a>
                </li>
                <li>
                  <a 
                    href="content.html"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Content
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="space-y-3">
                <a href="tel:+989220893214" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <div className="icon-phone text-lg"></div>
                  <span>+98-9220893214</span>
                </a>
                <a href="mailto:Amirrkinglet2003@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <div className="icon-mail text-lg"></div>
                  <span>Amirrkinglet2003@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 AmirHossein Rahmani. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
