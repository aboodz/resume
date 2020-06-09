import { h, render } from 'preact';
import * as resume from './resume.json';
import { Paragraph } from './components/paragraph';
import { PersonalInfo } from './components/personal-info';
import { extractPersonalInfo, extractWorkExperience, extractEducation, extractLanguages, extractInterests, extractSkills, extractProjects } from './mappers/mapper';
import { WorkExperience } from './components/experience';
import { Education } from './components/education';
import { Language } from './components/language';
import { Interest } from './components/interest';
import { SkillSet } from './components/skill-set';
import { Project } from './components/project';

const App = () => (
  <main class="page">
    <PersonalInfo {...extractPersonalInfo(resume)} />
    <hr />

    <Paragraph title="Summary" text={resume.basics.summary} />

    <h2>Work Experience</h2>
    {
      extractWorkExperience(resume).map(we => {
        return <WorkExperience {...we} />
      })
    }

    <div style="display: flex;">
      <div class="skills">
        <h2>Technologies and Skills</h2>
        {
          extractSkills(resume).map(skillSet => {
            return <SkillSet {...skillSet} />
          })
        }
      </div>

      <div class="more-info">
        <div class="projects">
          <h2>Projects</h2>
          {
            extractProjects(resume).map(p => {
              return <Project {...p} />
            })
          }
        </div>

        <h2>Education</h2>
        <ul class="education">
          {
            extractEducation(resume).map(ed => {
              return <Education {...ed} />;
            })
          }
        </ul>

        <h2>Language</h2>
        <ul class="languages">
          {
            extractLanguages(resume).map(lang => {
              return <Language {...lang} />
            })
          }
        </ul>

        <h2>Interests</h2>
        <ul class="interests">
          {
            extractInterests(resume).map(intrest => {
              return <Interest {...intrest} />
            })
          }
        </ul>

      </div>
    </div>

  </main>
);

render(<App />, document.body);
