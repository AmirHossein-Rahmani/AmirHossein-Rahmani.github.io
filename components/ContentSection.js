function ContentSection() {
  try {
    const [activeTab, setActiveTab] = React.useState('papers');

    const papers = [
      {
        title: 'Soon...',
        description: 'Coming soon',
        link: '#'
      }
    ];

    const books = [
      {
        title: 'Soon...',
        description: 'Coming soon',
        link: '#'
      }
    ];

    const videos = [
      {
        title: 'Soon...',
        description: 'Coming soon',
        link: '#'
      }
    ];

    return (
      <>
        <section 
          className="relative overflow-hidden"
          style={{
            height: '100vh',
            zIndex: 1
          }}
          data-name="content-hero"
          data-file="components/ContentSection.js"
        >
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4" style={{textShadow: '2px 2px 10px rgba(0,0,0,0.8)'}}>Content</h1>
              <p className="text-lg sm:text-xl md:text-2xl" style={{textShadow: '1px 1px 5px rgba(0,0,0,0.8)'}}>Papers, Books, Videos & Educational Materials</p>
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-24 px-4 md:px-6" style={{minHeight: '150vh', zIndex: 1}} data-name="content-section" data-file="components/ContentSection.js">
          <div className="container mx-auto max-w-4xl">
            <div 
              className="p-6 md:p-12 rounded-3xl shadow-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)'
              }}
            >
              <div className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-12">
              {['papers', 'books', 'videos'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-all text-sm md:text-base ${
                    activeTab === tab
                      ? 'text-white'
                      : 'text-[var(--text-primary)]'
                  }`}
                  style={activeTab === tab ? {
                    background: 'rgba(42, 42, 42, 0.8)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  } : {
                    background: 'rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.4)'
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
          </div>

          <div className="grid gap-6">
            {activeTab === 'papers' && papers.map((item, index) => (
              <ContentCard key={index} item={item} type="paper" index={index} />
            ))}
            {activeTab === 'books' && books.map((item, index) => (
              <ContentCard key={index} item={item} type="book" index={index} />
            ))}
            {activeTab === 'videos' && videos.map((item, index) => (
              <ContentCard key={index} item={item} type="video" index={index} />
            ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error('Content Section component error:', error);
    return null;
  }
}

function ContentCard({ item, type, index }) {
  return (
    <div 
      className="rounded-2xl p-4 md:p-6 transition-all hover:scale-105 relative overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.15)'
      }}
    >
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(255, 255, 255, 0.4), transparent)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}
      ></div>
      <div className="flex gap-4 md:gap-6 relative z-10">
        <div 
          className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl md:text-2xl font-bold"
          style={{
            background: 'linear-gradient(135deg, #000000, #404040)',
            color: '#ffffff',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
          }}
        >
          {index + 1}
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{item.title}</h3>
          <p className="text-gray-200 mb-4">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
