class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-[var(--primary-color)] text-white rounded-lg font-semibold"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function CVApp() {
  try {
    React.useEffect(() => {
      const loadingScreen = document.getElementById('loading-screen');
      
      const hideLoading = () => {
        if (loadingScreen) {
          loadingScreen.style.opacity = '0';
          setTimeout(() => {
            loadingScreen.style.display = 'none';
          }, 500);
        }
      };
      
      setTimeout(hideLoading, 1500);
      
      if (window.initTreeAnimation) {
        window.initTreeAnimation();
      }
    }, []);

    return (
      <div className="relative" data-name="cv-app" data-file="cv-app.js">
        <CVHeader />
        <CVContent />
        <Footer />
        <ScrollToTop />
      </div>
    );
  } catch (error) {
    console.error('CV App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <CVApp />
  </ErrorBoundary>
);