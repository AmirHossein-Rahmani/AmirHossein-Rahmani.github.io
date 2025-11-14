function Header() {
  try {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    };

    return (
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
        data-name="header"
        data-file="components/Header.js"
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="index.html" className="flex items-center cursor-pointer">
            <img 
              src="https://app.trickle.so/storage/public/images/usr_17bd142760000001/c11a8e60-8fbf-4a49-9135-41f4af23b803.png" 
              alt="AmirHossein Rahmani Logo" 
              className="h-10 md:h-12 w-auto hover:opacity-80 transition-opacity"
            />
          </a>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <div className={`icon-${mobileMenuOpen ? 'x' : 'menu'} text-2xl ${isScrolled ? 'text-[var(--text-primary)]' : 'text-[#2a2a2a]'}`}></div>
          </button>

          <nav className="hidden md:flex gap-8">
            {['About', 'Expertise', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-semibold transition-colors ${
                  isScrolled ? 'text-[var(--text-primary)] hover:text-[var(--primary-color)]' : 'text-[#2a2a2a] hover:text-[#1a1a1a]'
                }`}
              >
                {item}
              </button>
            ))}
            <a
              href="cv.html"
              className={`font-semibold transition-colors ${
                isScrolled ? 'text-[var(--text-primary)] hover:text-[var(--primary-color)]' : 'text-[#2a2a2a] hover:text-[#1a1a1a]'
              }`}
            >
              CV
            </a>
            <a
              href="content.html"
              className={`font-semibold transition-colors ${
                isScrolled ? 'text-[var(--text-primary)] hover:text-[var(--primary-color)]' : 'text-[#2a2a2a] hover:text-[#1a1a1a]'
              }`}
            >
              Content
            </a>
          </nav>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col p-4 space-y-4">
              {['About', 'Expertise', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left font-semibold text-[var(--text-primary)] hover:text-[var(--primary-color)] py-2"
                >
                  {item}
                </button>
              ))}
              <a
                href="cv.html"
                className="text-left font-semibold text-[var(--text-primary)] hover:text-[var(--primary-color)] py-2"
              >
                CV
              </a>
              <a
                href="content.html"
                className="text-left font-semibold text-[var(--text-primary)] hover:text-[var(--primary-color)] py-2"
              >
                Content
              </a>
            </nav>
          </div>
        )}
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
