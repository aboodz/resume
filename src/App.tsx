import PersonalInfo from './components/personal-info';
import Summary from './components/summary';
import WorkExperience from './components/work-experience';
import Education from './components/education';

function App() {
  return (
    <main className="bg-white max-w-[800px] my-0 mx-auto">
      <header>
        <PersonalInfo />
      </header>
      <Summary />
      <WorkExperience />
      <Education />
    </main>
  );
}

export default App;
