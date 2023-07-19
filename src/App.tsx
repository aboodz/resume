import PersonalInfo from './components/personal-info';
import Summary from './components/summary';
import WorkExperience from './components/work-experience';
import Skills from './components/skills';
import Projects from './components/projects';
import Education from './components/education';
import Languages from './components/languages';
import Interests from './components/interests';

function App() {
  return (
    <main>
      <header>
        <PersonalInfo />
      </header>
      <Summary />
      <WorkExperience />

      <div className="flex flex-row gap-4 mt-4">
        <Skills />
        <div>
          <Projects />

          <Education />

          <Languages />

          <Interests />
        </div>
      </div>
    </main>
  );
}

export default App;
