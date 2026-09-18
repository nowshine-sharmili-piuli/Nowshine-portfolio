import "./App.css";
import React from "react";
import {
  Mail,
  ArrowUpRight,
  GraduationCap,
  Award,
} from "lucide-react";

/* =========================
   ICONS
========================= */

function GithubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.04.78 2.1v3.1c0 .3.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8h4.96v15H.5V8Zm7.5 0h4.76v2.05h.07c.66-1.25 2.28-2.57 4.69-2.57 5.01 0 5.94 3.3 5.94 7.59V23h-4.95v-7.02c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72V23H8V8Z" />
    </svg>
  );
}

/* =========================
   DATA
========================= */

const PROFILE = {
  name: "Nowshine Sharmili Piuli",

  tagline: "Final-year Computer Science & Engineering student",

  summary:
    "Passionate about Artificial Intelligence, Machine Learning, Computer Vision, and Generative AI. I enjoy building practical systems that combine intelligent models with modern software engineering.",

  email: "nowshine.sharmili.piuli@gmail.com",

  github: "https://github.com/nowshine-sharmili-piuli",

  linkedin:
    "https://www.linkedin.com/in/nowshine-sharmili-piuli/",
};

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "International Islamic University Chittagong",
    details: "Computer Science & Engineering",
  },
];

const activities = [
  {
    role: "Chairperson",
    org: "IEEE CS BDC Web & IT Committee",
  },
  {
    role: "Executive Committee Member",
    org: "IEEE Computer Society Bangladesh Chapter",
  },
  {
    role: "WEB & IT Co-Chair",
    org: "IEEE Photonics Society Bangladesh Chapter -QPAIN 2025 and 2026",
  },
];

const projects = [
  {
    name: "Cyber Attack Detection",
    range: "Cyber Security • Machine Learning",
    desc:
      "A machine-learning based cybersecurity project for classifying network traffic and detecting malicious attack categories using supervised learning techniques.",
    stack: [
      "Python",
      "XGBoost",
      "Scikit-learn",
      "EDA",
      "ROC Curve",
      "PR Curve",
    ],
  },

  {
    name: "Artificial Intelligence, Machine Learning, Gen AI Concept and Applications",
    range: "Machine Learning • Research • Generative AI • NLP",
    desc:
      "Exploration of fundamental concepts and real-world applications of artificial intelligence, machine learning, and generative AI, with a focus on natural language processing.",
    stack: [
      "Python",
      "Machine Learning",
      "Graph Learning",
      "Natural Language Processing",
      "Data Analysis",
    ],
  },

  {
    name: "Food Restaurant Project",
    range: "HTML • CSS",
    desc:
      "A simple food restaurant website built with HTML and CSS.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },

];

const skills = [
  {
    title: "Languages",
    items: ["Python", "C", "C++", "JavaScript", "SQL"],
  },

  {
    title: "Frameworks & Tools",
    items: [
      "React",
      "FastAPI",
      "LangChain",
      "Git",
      "GitHub",
      "VS Code",
    ],
  },

  {
    title: "AI / ML",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "RAG",
      "Generative AI",
      "NLP",
    ],
  },

  {
    title: "Coursework",
    items: [
      "Data Structures",
      "Algorithms",
      "Computer Networks",
      "Cyber Security",
      "Database Systems",
      "Image Processing",
    ],
  },
];

/* =========================
   DESIGN TOKENS
========================= */

const TOKENS = {
  bg: "#050914",
  panel: "#0a1020",
  panel2: "#0d1426",
  border: "rgba(148, 163, 184, 0.14)",
  text: "#f4f7fb",
  muted: "#94a3b8",
  blue: "#60a5fa",
  blue2: "#38bdf8",
  white: "#ffffff",
};

/* =========================
   BACKGROUND ANIMATION
========================= */

function GridBackdrop() {
  return (
    <div className="grid-backdrop" aria-hidden="true">
      <div className="grid-lines" />
      <div className="glow-orb orb-one" />
      <div className="glow-orb orb-two" />
      <div className="glow-orb orb-three" />

      <div className="floating-dot dot-one" />
      <div className="floating-dot dot-two" />
      <div className="floating-dot dot-three" />
      <div className="floating-dot dot-four" />

      <div className="scan-line" />
    </div>
  );
}

/* =========================
   HERO METEOR
========================= */

function HeroMeteor() {
  return (
    <div className="hero-meteor" aria-hidden="true">
      <span className="meteor-head" />
    </div>
  );
}

/* =========================
   CORNER MARKS
========================= */

function CornerMarks() {
  return (
    <>
      <span className="corner-mark corner-top-left" />
      <span className="corner-mark corner-top-right" />
      <span className="corner-mark corner-bottom-left" />
      <span className="corner-mark corner-bottom-right" />
    </>
  );
}

/* =========================
   TAG
========================= */

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

/* =========================
   SECTION HEADER
========================= */

function SectionHeader({ title, icon }) {
  return (
    <div className="section-header">
      <div className="section-title-row">
        <span className="section-icon">{icon}</span>

        <h2>{title}</h2>
      </div>
    </div>
  );
}

/* =========================
   PORTFOLIO
========================= */

export default function Portfolio() {
  return (
    <main className="portfolio">
      <GridBackdrop />

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">
        <div className="nav-inner">
          <a href="#top" className="logo">
            NSP
          </a>

          <div className="nav-links">
            <a href="#education">Education</a>
            <a href="#leadership">Leadership</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </div>

          <a href="#contact" className="nav-contact">
            Contact
          </a>
        </div>
      </nav>

      {/* =========================
          HERO
      ========================= */}

      <section id="top" className="hero">
        <HeroMeteor />

        <CornerMarks />

        <div className="hero-content">
          <p className="hero-kicker">
            COMPUTER SCIENCE • AI • SOFTWARE
          </p>

          <h1>
            Hi, I'm{" "}
            <span className="gradient-text">
              Nowshine.
            </span>
          </h1>

          <h2>{PROFILE.tagline}</h2>

          <p className="hero-summary">
            {PROFILE.summary}
          </p>

          <div className="hero-actions">
            <a
              href={`mailto:${PROFILE.email}`}
              className="primary-button"
            >
              <Mail size={17} />
              Get in Touch
            </a>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              <GithubIcon size={17} />
              GitHub
              <ArrowUpRight size={15} />
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              <LinkedinIcon size={17} />
              LinkedIn
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          EDUCATION
      ========================= */}

      <section id="education" className="section">
        <SectionHeader
          title="Academic Journey"
          icon={<GraduationCap size={18} />}
        />

        <div className="education-card glass-card">
          <div className="timeline-dot" />

          <div>
            {education.map((item, index) => (
              <div key={index}>
                <h3>{item.degree}</h3>

                <p className="institution">
                  {item.institution}
                </p>

                <p className="muted-text">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          LEADERSHIP
      ========================= */}

      <section id="leadership" className="section">
        <SectionHeader
          title="Activities & Leadership"
          icon={<Award size={18} />}
        />

        <div className="activity-grid">
          {activities.map((activity, index) => (
            <article
              className="activity-card glass-card"
              key={index}
            >
              <div className="activity-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <h3>{activity.role}</h3>

                <p className="institution">
                  {activity.org}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================
          PROJECTS
      ========================= */}

      <section id="projects" className="section">
        <SectionHeader
          title="Projects"
          icon={<ArrowUpRight size={18} />}
        />

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className="project-card glass-card"
              key={index}
            >
              <div className="project-top">
                <span className="project-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <ArrowUpRight
                  size={18}
                  className="project-arrow"
                />
              </div>

              <p className="project-range">
                {project.range}
              </p>

              <h3>{project.name}</h3>

              <p className="project-description">
                {project.desc}
              </p>

              <div className="tag-list">
                {project.stack.map((item, stackIndex) => (
                  <Tag key={stackIndex}>{item}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================
          SKILLS
      ========================= */}

      <section id="skills" className="section">
        <SectionHeader
          title="Skills"
          icon={<Award size={18} />}
        />

        <div className="skills-grid">
          {skills.map((group, index) => (
            <article
              className="skill-card glass-card"
              key={index}
            >
              <h3>{group.title}</h3>

              <div className="tag-list">
                {group.items.map((item, itemIndex) => (
                  <Tag key={itemIndex}>{item}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================
          CONTACT
      ========================= */}

      <section id="contact" className="contact-section">
        <div className="contact-card glass-card">
          <p className="contact-kicker">
            LET'S CONNECT
          </p>

          <h2>
            Let's build something
            <span className="gradient-text">
              {" "}meaningful.
            </span>
          </h2>

          <p>
            Interested in AI, software development,
            research, or collaboration? Feel free to
            reach out.
          </p>

          <a
            href={`mailto:${PROFILE.email}`}
            className="primary-button"
          >
            <Mail size={17} />
            Say Hello
          </a>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">
        <div>
          © {new Date().getFullYear()}{" "}
          {PROFILE.name}
        </div>

        <div className="footer-socials">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>

          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </main>
  );
}