function ScrollToTop() {
  try {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    return (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        style={{ 
          animation: isVisible ? 'bounce 2s infinite' : 'none',
          background: 'rgba(42, 42, 42, 0.7)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)'
        }}
        data-name="scroll-to-top"
        data-file="components/ScrollToTop.js"
      >
        <div className="icon-arrow-up text-xl"></div>
      </button>
    );
  } catch (error) {
    console.error('ScrollToTop component error:', error);
    return null;
  }
}