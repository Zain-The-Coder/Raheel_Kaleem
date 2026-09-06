import { profileData, certificationsData, educationData, projectsData, experienceData } from "@/data";
import { AnimatedCounter, RevealOnScroll, SectionLabel, IconByName } from "@/components/ui";

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <RevealOnScroll>
          <SectionLabel title="About Me" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg text-slate-600">
              {profileData.summary.split('\n\n').map((paragraph, i) => (
                <p key={i} className="mb-4">{paragraph}</p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {profileData.stats.map((stat, index) => (
                <AnimatedCounter 
                  key={index} 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  label={stat.label} 
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function Expertise() {
  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <RevealOnScroll>
          <SectionLabel 
            title="Training & Facilitation Expertise" 
            subtitle="Core competencies and methodologies I use to drive operational excellence." 
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {profileData.skills.map((skill, i) => (
              <RevealOnScroll key={i} delay={i * 0.05} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-4 h-4 bg-blue-500 rounded-sm rotate-45"></div>
                </div>
                <h3 className="font-semibold text-slate-900">{skill}</h3>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <RevealOnScroll>
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
            <div className="h-1 w-20 bg-yellow-500 rounded-full mt-6 mx-auto md:mx-0"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, i) => (
              <RevealOnScroll key={cert.id} delay={i * 0.1} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-yellow-600/50 transition-colors">
                <IconByName name="Award" className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                <p className="text-slate-400 text-sm mb-1">{cert.issuer}</p>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-700 text-xs text-slate-500">
                  <span>{cert.date}</span>
                  {cert.credentialId && <span>ID: {cert.credentialId}</span>}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <RevealOnScroll>
          <SectionLabel title="Key Projects & Case Studies" subtitle="Proven track record of delivering measurable improvements." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {projectsData.map((project, i) => (
              <RevealOnScroll key={project.id} delay={i * 0.1} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-50 rounded-lg text-slate-700">
                    <IconByName name={project.iconType === "magnifying-glass" ? "Search" : project.iconType === "gear" ? "Settings" : project.iconType === "shield" ? "ShieldCheck" : project.iconType === "clock" ? "Clock" : "TrendingUp"} className="w-6 h-6" />
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                    {project.statValue} {project.statLabel}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 flex-grow">{project.description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <RevealOnScroll>
          <SectionLabel title="Professional Experience" />
          <div className="mt-12 space-y-8">
            {experienceData.map((exp, i) => (
              <RevealOnScroll key={exp.id} delay={i * 0.1} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                    <p className="text-lg text-slate-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold">
                    {exp.dates}
                  </div>
                </div>
                <ul className="space-y-3 mt-6">
                  {exp.impacts.map((impact, j) => (
                    <li key={j} className="flex items-start text-slate-600">
                      <span className="text-yellow-500 mr-3 mt-1">•</span>
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <RevealOnScroll>
          <SectionLabel title="Education" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {educationData.map((edu, i) => (
              <RevealOnScroll key={edu.id} delay={i * 0.1} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <IconByName name="GraduationCap" className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="font-bold text-slate-900 mb-1">{edu.degree}</h3>
                <p className="text-slate-600">{edu.institution}</p>
                <p className="text-sm text-slate-400 mt-4">{edu.years}</p>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can build a culture of continuous improvement and eliminate waste in your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:contact@example.com" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg">
              Contact Me Directly
            </a>
            <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-medium border border-slate-200 hover:border-slate-300 transition-colors">
              Connect on LinkedIn
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
