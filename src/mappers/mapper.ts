import { PersonaInfoData, ProfileData } from "../components/personal-info";
import { ResumeSchema } from "../types/resume";
import * as countries from 'i18n-iso-countries';
import * as en from 'i18n-iso-countries/langs/en.json';
import { WorkExperienceData } from "../components/experience";
import { EducationData } from "../components/education";
import { LanguageData, Fluency } from "../components/language";
import { IntresetData } from "../components/interest";
import { SkillSetData } from "../components/skill-set";

countries.registerLocale(en);

export function extractAddress(resume: ResumeSchema): string {
  return `${resume.basics.location.city}, ${countries.getName(resume.basics.location.countryCode, 'en')}`;
}

export function extractProfiles(resume: ResumeSchema): ProfileData[] {
  return resume.basics.profiles.map(p => ({
    network: p.network,
    url: p.url,
    username: p.username
  }));
}

export function extractPersonalInfo(resume: ResumeSchema): PersonaInfoData {
  return {
    name: resume.basics.name,
    label: resume.basics.label,
    email: resume.basics.email,
    mobile: resume.basics.phone,
    telephone: '',
    address: extractAddress(resume),
    profiles: extractProfiles(resume)
  }
}

export function extractWorkExperience(resume: ResumeSchema): WorkExperienceData[] {
  return resume.work.map(w => ({
    company: w.name,
    location: w.location,
    position: [w.position],
    startDate: new Date(w.startDate),
    endDate: w.endDate ? new Date(w.endDate) : null,
    website: new URL(w.website),
    summary: w.summary,
    highlights: w.highlights,
  }));
}

export function extractSkills(resume: ResumeSchema): SkillSetData[] {
  return resume.skills.map(s => ({
    name: s.name,
    level: s.level,
    keywords: s.keywords
  }));
}

export function extractEducation(resume: ResumeSchema): EducationData[] {
  return resume.education.map(e => ({
    institution: e.institution,
    courses: e.courses,
    degree: e.studyType,
    startDate: new Date(e.startDate),
    endDate: e.endDate ? new Date(e.endDate) : null,
    gpa: parseInt(e.gpa, 10),
    major: e.area
  }));
}

export function extractLanguages(resume: ResumeSchema): LanguageData[] {
  return resume.languages.map(l => ({
    langauge: l.language,
    fluency: l.fluency as Fluency
  }));
}

export function extractInterests(resume: ResumeSchema): IntresetData[] {
  return resume.interests.map(i => ({
    name: i.name,
    keywords: i.keywords
  }));
}

