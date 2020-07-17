import { h, render } from 'preact';
import * as resume from './resume.json';
import { PersonalInfo } from './components/personal-info';
import { extractPersonalInfo, extractWorkExperience, extractEducation, extractLanguages, extractInterests, extractSkills, extractProjects } from './mappers/mapper';
import { WorkExperience } from './components/experience';
import { Education } from './components/education';
import { Language } from './components/language';
import { Interest } from './components/interest';
import { SkillSet } from './components/skill-set';
import { Project } from './components/project';
import { SummarySection } from './components/summary';

const App = () => (

  <main class="page">
    <PersonalInfo {...extractPersonalInfo(resume)} />

    <SummarySection resume={resume} />

    <section aria-label="Work Experience">
      <h2>Work Experience</h2>
      {
        extractWorkExperience(resume).map(we => {
          return <WorkExperience {...we} />
        })
      }
    </section>

    <div class="second-page" style="display: flex;">
      <section class="skills">
        <h2>Technologies and Skills</h2>
        {
          extractSkills(resume).map(skillSet => {
            return <SkillSet {...skillSet} />
          })
        }
      </section>

      <section class="more-info">
        <section class="projects">
          <h2>Projects</h2>
          {
            extractProjects(resume).map(p => {
              return <Project {...p} />
            })
          }
        </section>

        <section class="education">
          <h2>Education</h2>
          {
            extractEducation(resume).map(ed => {
              return <Education {...ed} />;
            })
          }
        </section>


        <section class="languages">
          <h2>Language</h2>
          {
            extractLanguages(resume).map(lang => {
              return <Language {...lang} />
            })
          }
        </section>

        <Interest intrests={...extractInterests(resume)} />

      </section>
    </div>

  </main>
);

render(<App />, document.body);
