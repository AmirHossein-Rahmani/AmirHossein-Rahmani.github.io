function CVContent() {
  try {
    return (
      <div className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 bg-white min-h-screen" data-name="cv-content" data-file="components/CVContent.js">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12">
            <div className="text-center mb-8 md:mb-12 border-b-2 border-gray-200 pb-6 md:pb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-[var(--text-primary)]">Amir Hosein Rahmani</h1>
              <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-4 md:mt-6 text-xs md:text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <div className="icon-map-pin text-lg text-[var(--primary-color)]"></div>
                  <span>Sharif UT, Iran, Tehran</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="icon-phone text-lg text-[var(--primary-color)]"></div>
                  <span>(+98) 922 089 3214</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="icon-mail text-lg text-[var(--primary-color)]"></div>
                  <span>Amiirkinglet2003@gmail.com</span>
                </div>
              </div>
              <div className="mt-4">
                <a href="mailto:Amirhoseinrahmani03@sharif.edu" className="text-[var(--primary-color)] hover:underline">
                  Amirhoseinrahmani03@sharif.edu
                </a>
              </div>
            </div>

            <CVSection title="Education" icon="graduation-cap">
              <CVEntry
                year="2021-2026"
                title="Minor of Economic"
                institution="Sharif University of Technology"
                gpa="GPA - 4.0/4.0"
                description="In Top 10 Student; at the same time"
              />
              <CVEntry
                year="2020-2026"
                title="Bachelor of Civil Engineering"
                institution="Sharif University of Technology"
                gpa="GPA - 3.5/4.0"
                description="Mathematical and engineering vision and attitude"
              />
              <CVEntry
                year="2025"
                title="National Student Olympiad in Economics"
                gpa="6th"
              />
            </CVSection>

            <CVSection title="Experiences" icon="briefcase">
              <CVListItem year="2024" text="Teaching Assistant for Microeconomics Course at Sharif University of Technology | Dr.Tajrishi" />
              <CVListItem year="2025" text="Teaching Assistant for Principles of Economics Course at Sharif University of Technology | Dr.Nili" />
              <CVListItem year="2025" text="Internship at Sepas Company" />
              <CVListItem year="2025" text="Teaching Assistant for the Summer Olympiad in Economics, Iran | Dr. Tajrishi" />
              <CVListItem year="2025" text="Teaching Assistant for StartupFinance Course at Sharif University of Technology | Dr.HaghPanah" />
              <CVListItem year="2025" text="Teaching Assistant for System's Dynamic Course at Sharif University of Technology | Dr.Mashayekhi" />
            </CVSection>

            <CVSection title="Research Experience" icon="search">
              <CVListItem year="2023" text="An Analysis of the Policy on Liberalizing Car Imports in Iran" />
              <CVListItem year="2024" text="An Analysis of Wealth Resources (Where Do Wealth Resources Come From? A Case Study of Norway) and Its Examination in Iran" />
              <CVListItem year="2025" text="An Analysis of Government Subsidy Policies and Their Impact on the State Budget from a System Dynamics Perspective" />
              <CVListItem year="2025" text="Compare two allocation mechanisms (case study): market- vs. centralized queue- based ('Samaneh')" />
              <CVListItem year="2025" text="A Market Research for Asset's Token Market" />
            </CVSection>

            <CVSection title="Courses" icon="book-open">
              <CVListItem year="2022" text="Self-Leadership Workshop for Innovation Leadership - AmirKabir University of Technology" />
              <CVListItem year="2023" text="Research Paper Writing Course - Tarbiat Modares University" />
              <CVListItem year="2024" text="Operations Research Workshop for Economics - Sharif University of Technology" />
            </CVSection>

            <CVSection title="Computer Skills" icon="cpu">
              <div className="space-y-3">
                <SkillItem level="Basic" skills="Java, Bloomberg Terminal" />
                <SkillItem level="Intermediate" skills="Matlab, Git/GitHub, Cloud Computing" />
                <SkillItem level="Advanced" skills="Python, Deep Learning, Machine Learning, Stata, LaTeX, Office, R, Vensim, Arc GIS" />
              </div>
            </CVSection>

            <CVSection title="Communication Skills" icon="users">
              <div className="grid grid-cols-2 gap-4">
                <SkillTag text="Public Speaking" />
                <SkillTag text="Presentation Skills" />
                <SkillTag text="Report Writing" />
                <SkillTag text="Active Listening" />
                <SkillTag text="Team Work" />
                <SkillTag text="Teaching" />
              </div>
            </CVSection>

            <CVSection title="Languages" icon="globe">
              <div className="space-y-2">
                <LanguageItem language="Persian" level="Mothertongue" flag="🇮🇷" />
                <LanguageItem language="English" level="Advanced" note="Conversationally fluent" flag="🇬🇧" />
                <LanguageItem language="French" level="Intermediate" note="Basic words and phrases only" flag="🇫🇷" />
              </div>
            </CVSection>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('CV Content component error:', error);
    return null;
  }
}

function CVSection({ title, icon, children }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-300">
        <div className={`icon-${icon} text-2xl text-[var(--primary-color)]`}></div>
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">{title}</h2>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

function CVEntry({ year, title, institution, gpa, description }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
      <div className="w-full sm:w-32 flex-shrink-0 font-semibold text-[var(--text-secondary)]">{year}</div>
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)] mb-1">{title}</h3>
        {institution && <p className="text-[var(--text-secondary)] mb-1">{institution}</p>}
        {gpa && <p className="text-[var(--primary-color)] font-semibold mb-1">{gpa}</p>}
        {description && <p className="text-[var(--text-secondary)] italic">{description}</p>}
      </div>
    </div>
  );
}

function CVListItem({ year, text }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
      <div className="w-full sm:w-32 flex-shrink-0 font-semibold text-[var(--text-secondary)]">{year}</div>
      <div className="flex-1 text-[var(--text-primary)]">{text}</div>
    </div>
  );
}

function SkillItem({ level, skills }) {
  return (
    <div className="flex gap-4">
      <span className="w-32 font-semibold text-[var(--primary-color)]">{level}:</span>
      <span className="flex-1 text-[var(--text-primary)]">{skills}</span>
    </div>
  );
}

function SkillTag({ text }) {
  return (
    <div className="flex items-center gap-2 text-[var(--text-primary)]">
      <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full"></div>
      <span>{text}</span>
    </div>
  );
}

function LanguageItem({ language, level, note, flag }) {
  return (
    <div className="flex gap-4">
      <span className="w-40 font-semibold text-[var(--text-primary)] flex items-center gap-3">
        <span className="text-2xl">{flag}</span>
        <span>{language}</span>
      </span>
      <span className="flex-1 text-[var(--text-secondary)]">
        {level}
        {note && <span className="ml-2 italic">({note})</span>}
      </span>
    </div>
  );
}
