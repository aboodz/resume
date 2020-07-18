import { h, render } from 'preact';
import * as resume from './resume.json';
import { PersonalInfo } from './components/personal-info';
import { extractPersonalInfo } from './mappers/mapper';
import { WorkExperienceSection } from './components/experience';
import { EducationSection } from './components/education';
import { LanguageSection } from './components/language';
import { InterestSection } from './components/interest';
import { SkillsSection } from './components/skill-set';
import { ProjectSection } from './components/project';
import { SummarySection } from './components/summary';

const App = () => (

  <main class="page">
    <PersonalInfo {...extractPersonalInfo(resume)} />

    <SummarySection resume={resume} />
    <WorkExperienceSection resume={resume} />

    <div class="second-page" style="display: flex;">
      <SkillsSection resume={resume} />
      <section class="more-info">
        <ProjectSection resume={resume} />

        <EducationSection resume={resume} />

        <LanguageSection resume={resume} />

        <InterestSection resume={resume} />

      </section>
    </div>

  </main>
);

render(<App />, document.body);
