function About() {
  try {
    return (
      <section 
        id="about"
        className="relative py-16 md:py-24 px-4 md:px-6 bg-white"
        data-name="about"
        data-file="components/About.js"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title text-center mb-8 md:mb-12 text-3xl md:text-4xl">About Me</h2>
          <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Hello and welcome! I'm Amir Hossein.
            </p>
            <p>
              From a young age, I've always had a deep love for problem-solving and mathematics, constantly seeking out and placing myself in challenging situations. This innate curiosity drives everything I do.
            </p>
            <p>
              My professional energy is currently dedicated to the fascinating worlds of economics and data science, where I enjoy unraveling complex patterns and telling stories through data.
            </p>
            <p>
              Outside of my work, I'm an avid enthusiast of PC gaming and films. I have a great appreciation for animals and nature, and I am deeply inspired by the powerful emotions of love, sacrifice, and courage.
            </p>
            <p>
              At my core, I am a perpetual learner, always drawn to discovering new and unknown things.
            </p>
            <p className="font-semibold text-[var(--text-primary)]">
              Thank you for being here—I'm delighted to have you.
            </p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}
