import PersonalInfo from './components/personal-info';
import Summary from './components/summary';
import WorkExperience from './components/work-experience';
import Education from './components/education';

function App() {
  return (
    <main className="bg-white max-w-[720px] my-0 mx-auto px-4 sm:px-6 print:px-0">
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
