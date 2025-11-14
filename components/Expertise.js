function Expertise() {
  try {
    const interestAreas = [
      'Machine Learning',
      'Deep Learning',
      'Reinforcement Learning',
      'Finance',
      'Big Data',
      'Game Theory',
      'Econometrics',
      'Environmental economics',
      'Behavioral economics',
      'Quant Finance',
      'Macroeconomics',
      'Microeconomics'
    ];

    React.useEffect(() => {
      if (window.initSymbolsRainAnimation) {
        window.initSymbolsRainAnimation();
      }
    }, []);

    return (
      <section 
        id="expertise"
        className="relative py-16 md:py-24 px-4 md:px-6 bg-gray-50 overflow-hidden"
        data-name="expertise"
        data-file="components/Expertise.js"
      >
        <canvas id="symbolsRainCanvas"></canvas>
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-8 md:mb-16 relative z-10 text-3xl md:text-4xl">Interest Areas</h2>
          <div className="relative z-10">
            <div className="scroll-container">
              <div style={{"paddingTop":"19px","paddingRight":"0px","paddingBottom":"23px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"0px","marginLeft":"0px","fontSize":"18px","color":"rgb(26, 26, 26)","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"start","fontWeight":"400","objectFit":"fill","display":"flex","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="scroll-content">
                {interestAreas.map((area, index) => (
                  <div 
                    key={index}
                    className="interest-item"
                  >
                    {area}
                  </div>
                ))}
                {interestAreas.map((area, index) => (
                  <div 
                    key={`duplicate-${index}`}
                    className="interest-item"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Expertise component error:', error);
    return null;
  }
}
