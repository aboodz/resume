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

const date = new Date('2021-02-20');

const App = () => (
  <div class="page">
    <main>
      <header>
        <PersonalInfo {...extractPersonalInfo(resume)} />
      </header>

      <SummarySection resume={resume} />
      <WorkExperienceSection resume={resume} />

      <div class="second-page" style="display: flex;">
        <SkillsSection resume={resume} />
        <div class="more-info">
          <ProjectSection resume={resume} />

          <EducationSection resume={resume} />

          <LanguageSection resume={resume} />

          <InterestSection resume={resume} />
        </div>
      </div>
    </main>
    <footer>
      <div>
        Made by <a href="https://github.com/aboodz/resume">aboodz/resume</a> --
        <time dateTime={date.toISOString()}>{date.toLocaleDateString()}</time>
      </div>
    </footer>
  </div>
);

render(<App />, document.body);
