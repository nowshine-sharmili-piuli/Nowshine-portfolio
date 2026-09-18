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

function GithubIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.12 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.68.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0Z" />
    </svg>
  );
}

/* =========================
   PROFILE
   ========================= */

const PROFILE = {
  name: "Nowshine Sharmili Piuli",

  tagline: "Final-year Computer Science & Engineering student",

  summary:
    "Computer Science & Engineering student interested in Machine Learning, Deep Learning, Computer Vision, and Generative AI. I enjoy building practical projects and exploring research-oriented ideas.",

  email: "your-email@example.com",

  github: "https://github.com/yourusername",

  linkedin: "https://www.linkedin.com/in/nowshine-sharmili-piuli/",
};

/* =========================
   EDUCATION
   ========================= */

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "International Islamic University Chittagong",
    period: "2022 – Present",
    description:
      "Focused on Machine Learning, Artificial Intelligence, Computer Vision, Image Processing, Data Mining, Computer Security, and Software Engineering.",
  },
];

/* =========================
   ACTIVITIES
   ========================= */

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
    role: "Technical & Event Volunteer",
    org: "IEEE CS BDC",
  },
];

/* =========================
   SELECTED WORK
   ========================= */

const projects = [
  {
    name: "AI-Powered RAG Chatbot",
    range: "2026",
    desc:
      "A portfolio-ready AI chatbot combining Retrieval-Augmented Generation, OCR, vector search, web search, and an intelligent conversational interface.",
    stack: ["React", "FastAPI", "LangChain", "FAISS", "Groq"],
  },

  {
    name: "ML-Based Network Attack Detection",
    range: "2025",
    desc:
      "A machine learning-based cybersecurity project for detecting and classifying network attacks using data preprocessing, EDA, XGBoost, Logistic Regression, and performance evaluation.",
    stack: ["Python", "XGBoost", "Scikit-learn", "Pandas"],
  },

  {
    name: "Image Processing Toolkit",
    range: "2025",
    desc:
      "A collection of image processing techniques including contrast stretching, histogram equalization, image transformations, segmentation, morphological operations, and feature extraction.",
    stack: ["Python", "OpenCV", "NumPy", "Matplotlib"],
  },
];

/* =========================
   SKILLS
   ========================= */

const skills = {
  Languages: [
    "Python",
    "JavaScript",
    "C",
    "C++",
    "Java",
    "SQL",
  ],

  "Frameworks & Tools": [
    "React",
    "FastAPI",
    "LangChain",
    "FAISS",
    "Git",
    "GitHub",
    "Google Colab",
    "VS Code",
  ],

  "AI / ML": [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "RAG",
    "Generative AI",
    "OCR",
  ],

  Coursework: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Image Processing",
    "Computer Security",
    "Database Systems",
  ],
};

/* =========================
   DESIGN TOKENS
   ========================= */

const TOKENS = {
  bg: "#071018",
  panel: "#0b1620",
  panel2: "#0d1b26",
  text: "#eaf4fb",
  muted: "#9bb0bf",
  blue: "#6fb7e0",
  gold: "#e3a857",
  border: "rgba(150,190,220,0.14)",
};

/* =========================
   GRID BACKGROUND
   ========================= */

function GridBackdrop() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        opacity: 0.3,
        backgroundImage: `
          linear-gradient(
            rgba(111,183,224,0.06) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(111,183,224,0.06) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "42px 42px",
        maskImage:
          "linear-gradient(to bottom, black, transparent 90%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black, transparent 90%)",
      }}
    />
  );
}

/* =========================
   ANIMATED BACKGROUND
   ========================= */

function BackgroundAnimation() {
  return (
    <div className="pf-bg-animation" aria-hidden="true">
      <div className="pf-orb pf-orb-1" />
      <div className="pf-orb pf-orb-2" />
      <div className="pf-orb pf-orb-3" />

      <div className="pf-floating-dot pf-dot-1" />
      <div className="pf-floating-dot pf-dot-2" />
      <div className="pf-floating-dot pf-dot-3" />

      <div className="pf-scanline" />
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
      <span
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
          borderLeft: `1px solid ${TOKENS.blue}`,
          borderTop: `1px solid ${TOKENS.blue}`,
          opacity: 0.7,
        }}
      />

      <span
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: 14,
          height: 14,
          borderRight: `1px solid ${TOKENS.gold}`,
          borderBottom: `1px solid ${TOKENS.gold}`,
          opacity: 0.7,
        }}
      />
    </>
  );
}

/* =========================
   TAG
   ========================= */

function Tag({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "5px 9px",
        borderRadius: 999,
        border: `1px solid ${TOKENS.border}`,
        background: "rgba(111,183,224,0.06)",
        color: TOKENS.muted,
        fontSize: 12,
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

/* =========================
   SECTION HEADER
   ========================= */

function SectionHeader({ eyebrow, title, icon }) {
  return (
    <div style={{ marginBottom: 30 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 8,
          color: TOKENS.blue,
          fontSize: 12,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        {icon}
        <span>{eyebrow}</span>
      </div>

      <h2
        style={{
          margin: 0,
          fontSize: "clamp(26px, 4vw, 40px)",
          lineHeight: 1.1,
          color: TOKENS.text,
          letterSpacing: "-0.03em",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

/* =========================
   PORTFOLIO
   ========================= */

export default function Portfolio() {
  return (
    <>
      <style>{`

        /* =========================
           BASE
           ========================= */

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: ${TOKENS.bg};
          color: ${TOKENS.text};

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        /* =========================
           PAGE
           ========================= */

        .pf-page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 50% -10%,
              rgba(111,183,224,0.08),
              transparent 35%
            ),
            ${TOKENS.bg};

          position: relative;
          isolation: isolate;
          overflow-x: hidden;
        }

        .pf-content {
          position: relative;
          z-index: 2;
        }

        /* =========================
           GLOBAL BACKGROUND
           ========================= */

        .pf-bg-animation {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(111,183,224,0.06),
              transparent 28%
            ),
            radial-gradient(
              circle at 85% 70%,
              rgba(227,168,87,0.05),
              transparent 25%
            );
        }

        .pf-bg-animation::before {
          content: "";
          position: absolute;
          inset: -100px;

          background-image:
            linear-gradient(
              rgba(150,190,220,0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(150,190,220,0.025) 1px,
              transparent 1px
            );

          background-size: 50px 50px;

          animation: pf-grid-move 20s linear infinite;
        }

        .pf-orb {
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.18;
        }

        .pf-orb-1 {
          background: #6fb7e0;
          top: 5%;
          left: -120px;
          animation: pf-float-1 14s ease-in-out infinite alternate;
        }

        .pf-orb-2 {
          background: #e3a857;
          right: -120px;
          top: 45%;
          animation: pf-float-2 16s ease-in-out infinite alternate;
        }

        .pf-orb-3 {
          background: #6fb7e0;
          left: 35%;
          bottom: -150px;
          animation: pf-float-3 18s ease-in-out infinite alternate;
        }

        .pf-floating-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(111,183,224,0.8);
          box-shadow: 0 0 12px rgba(111,183,224,0.8);

          animation: pf-dot-float 8s ease-in-out infinite;
        }

        .pf-dot-1 {
          top: 25%;
          left: 12%;
        }

        .pf-dot-2 {
          top: 65%;
          right: 15%;
          animation-delay: 2s;
        }

        .pf-dot-3 {
          bottom: 15%;
          left: 70%;
          animation-delay: 4s;
        }

        .pf-scanline {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          top: -10%;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(111,183,224,0.15),
            transparent
          );

          box-shadow: 0 0 18px rgba(111,183,224,0.12);

          animation: pf-scan 10s linear infinite;
        }

        /* =========================
           NAVBAR
           ========================= */

        .pf-nav {
          position: sticky;
          top: 0;
          z-index: 20;

          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);

          background: rgba(7,16,24,0.78);

          border-bottom:
            1px solid rgba(150,190,220,0.08);
        }

        .pf-nav-inner {
          max-width: 1180px;
          margin: 0 auto;

          padding: 18px 24px;

          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .pf-nav-links {
          display: flex;
          align-items: center;
          gap: 22px;

          color: ${TOKENS.muted};
          font-size: 13px;
        }

        .pf-nav-links a {
          transition:
            color 0.25s ease,
            transform 0.25s ease;
        }

        .pf-nav-links a:hover {
          color: ${TOKENS.text};
          transform: translateY(-1px);
        }

        /* =========================
           HERO
           ========================= */

        .pf-hero {
          min-height: 92vh;
          position: relative;

          display: flex;
          align-items: center;

          overflow: hidden;
        }

        .pf-hero-inner {
          max-width: 1180px;
          width: 100%;

          margin: 0 auto;

          padding:
            90px
            24px
            100px;

          position: relative;
          z-index: 3;
        }

        .pf-hero-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 1.4fr)
            minmax(260px, 0.6fr);

          gap: 60px;
          align-items: center;
        }

        .pf-kicker {
          color: ${TOKENS.blue};

          font-size: 13px;
          font-weight: 700;

          letter-spacing: 0.18em;
          text-transform: uppercase;

          margin-bottom: 20px;
        }

        .pf-name {
          margin: 0;

          font-size:
            clamp(42px, 7vw, 82px);

          line-height: 0.98;

          letter-spacing: -0.055em;

          max-width: 850px;
        }

        .pf-tagline {
          margin-top: 24px;

          font-size:
            clamp(19px, 2.5vw, 28px);

          line-height: 1.35;

          color: ${TOKENS.muted};

          max-width: 760px;
        }

        .pf-summary {
          margin-top: 20px;

          max-width: 720px;

          color: ${TOKENS.muted};

          font-size: 15px;
          line-height: 1.8;
        }

        .pf-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;

          margin-top: 30px;
        }

        .pf-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          padding: 12px 17px;

          border-radius: 10px;

          border:
            1px solid ${TOKENS.border};

          background:
            rgba(255,255,255,0.025);

          color: ${TOKENS.text};

          font-size: 13px;
          font-weight: 600;

          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .pf-button:hover {
          transform: translateY(-3px);

          border-color:
            rgba(111,183,224,0.45);

          background:
            rgba(111,183,224,0.07);
        }

        .pf-button.primary {
          background:
            rgba(111,183,224,0.1);

          border-color:
            rgba(111,183,224,0.3);
        }

        /* =========================
           HERO SIDE CARD
           ========================= */

        .pf-hero-card {
          position: relative;

          padding: 28px;

          border:
            1px solid ${TOKENS.border};

          border-radius: 18px;

          background:
            linear-gradient(
              145deg,
              rgba(13,27,38,0.92),
              rgba(7,16,24,0.7)
            );

          box-shadow:
            0 20px 60px rgba(0,0,0,0.22);

          animation:
            pf-card-float 5s ease-in-out infinite;
        }

        .pf-hero-card-label {
          color: ${TOKENS.gold};

          font-size: 11px;
          font-weight: 700;

          letter-spacing: 0.15em;
          text-transform: uppercase;

          margin-bottom: 14px;
        }

        .pf-hero-card-title {
          font-size: 23px;
          line-height: 1.25;

          margin-bottom: 14px;
        }

        .pf-hero-card-text {
          color: ${TOKENS.muted};

          font-size: 13px;
          line-height: 1.7;
        }

        /* =========================
           METEOR
           ========================= */

        .hero-meteor {
          position: absolute;

          top: 8%;
          left: -240px;

          width: 190px;
          height: 3px;

          z-index: 2;

          pointer-events: none;

          transform: rotate(-25deg);

          opacity: 0;

          animation:
            meteorFly 6s linear infinite;
        }

        .hero-meteor::before {
          content: "";

          position: absolute;

          left: 0;
          top: 0;

          width: 165px;
          height: 2px;

          border-radius: 999px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(111,183,224,0.08),
              rgba(111,183,224,0.45),
              rgba(255,255,255,0.95)
            );

          filter: blur(0.6px);

          box-shadow:
            0 0 8px rgba(111,183,224,0.7),
            0 0 18px rgba(111,183,224,0.35);
        }

        .meteor-head {
          position: absolute;

          right: 0;
          top: -3px;

          width: 8px;
          height: 8px;

          border-radius: 50%;

          background: #ffffff;

          box-shadow:
            0 0 5px #ffffff,
            0 0 12px rgba(111,183,224,0.95),
            0 0 25px rgba(111,183,224,0.7);
        }

        /* =========================
           SECTIONS
           ========================= */

        .pf-section {
          max-width: 1180px;

          margin: 0 auto;

          padding:
            100px 24px;
        }

        .pf-card {
          position: relative;

          border:
            1px solid ${TOKENS.border};

          background:
            rgba(11,22,32,0.65);

          border-radius: 16px;

          padding: 25px;

          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .pf-card:hover {
          transform: translateY(-5px);

          border-color:
            rgba(111,183,224,0.3);

          background:
            rgba(13,27,38,0.82);
        }

        .pf-grid-2 {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 18px;
        }

        .pf-grid-3 {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 18px;
        }

        .pf-card-title {
          margin: 0;

          font-size: 20px;

          line-height: 1.25;
        }

        .pf-card-meta {
          margin-top: 8px;

          color: ${TOKENS.blue};

          font-size: 12px;
          font-weight: 600;
        }

        .pf-card-text {
          margin-top: 14px;

          color: ${TOKENS.muted};

          font-size: 14px;

          line-height: 1.75;
        }

        /* =========================
           PROJECTS
           ========================= */

        .project-card {
          min-height: 270px;

          display: flex;
          flex-direction: column;
        }

        .project-desc {
          flex: 1;
        }

        /* =========================
           SKILLS
           ========================= */

        .pf-skill-group {
          padding: 24px;
        }

        .pf-skill-title {
          margin-bottom: 15px;

          color: ${TOKENS.gold};

          font-size: 14px;
          font-weight: 700;
        }

        .pf-skill-list {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;
        }

        /* =========================
           FOOTER
           ========================= */

        .pf-footer {
          max-width: 1180px;

          margin: 0 auto;

          padding:
            50px 24px
            70px;

          border-top:
            1px solid rgba(150,190,220,0.08);

          display: flex;

          justify-content: space-between;
          align-items: center;

          gap: 20px;
        }

        .pf-footer-links {
          display: flex;

          align-items: center;

          gap: 10px;
        }

        .pf-icon-link {
          width: 38px;
          height: 38px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          border-radius: 10px;

          border:
            1px solid ${TOKENS.border};

          color: ${TOKENS.muted};

          transition:
            transform 0.25s ease,
            color 0.25s ease,
            border-color 0.25s ease;
        }

        .pf-icon-link:hover {
          transform: translateY(-3px);

          color: ${TOKENS.text};

          border-color:
            rgba(111,183,224,0.4);
        }

        /* =========================
           ANIMATIONS
           ========================= */

        @keyframes pf-grid-move {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(50px);
          }
        }

        @keyframes pf-float-1 {
          from {
            transform:
              translate3d(0,0,0)
              scale(1);
          }

          to {
            transform:
              translate3d(100px,80px,0)
              scale(1.15);
          }
        }

        @keyframes pf-float-2 {
          from {
            transform:
              translate3d(0,0,0)
              scale(1);
          }

          to {
            transform:
              translate3d(-100px,60px,0)
              scale(1.12);
          }
        }

        @keyframes pf-float-3 {
          from {
            transform:
              translate3d(0,0,0)
              scale(1);
          }

          to {
            transform:
              translate3d(80px,-90px,0)
              scale(1.1);
          }
        }

        @keyframes pf-dot-float {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.35;
          }

          50% {
            transform: translateY(-25px);
            opacity: 1;
          }
        }

        @keyframes pf-scan {
          from {
            transform: translateY(-10vh);
          }

          to {
            transform: translateY(110vh);
          }
        }

        @keyframes pf-card-float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        /* =========================
           METEOR ANIMATION
           ========================= */

        @keyframes meteorFly {

          0% {
            left: -240px;
            top: 8%;

            opacity: 0;

            transform:
              rotate(-25deg)
              scale(0.75);
          }

          7% {
            opacity: 1;
          }

          35% {
            opacity: 1;
          }

          58% {
            left: 48%;
            top: 38%;

            opacity: 1;

            transform:
              rotate(-25deg)
              scale(1);
          }

          78% {
            left: 82%;
            top: 62%;

            opacity: 0.75;

            transform:
              rotate(-25deg)
              scale(0.92);
          }

          100% {
            left: 115%;
            top: 84%;

            opacity: 0;

            transform:
              rotate(-25deg)
              scale(0.65);
          }
        }

        /* =========================
           RESPONSIVE
           ========================= */

        @media (max-width: 900px) {

          .pf-hero-grid {
            grid-template-columns: 1fr;
          }

          .pf-hero-card {
            max-width: 520px;
          }

          .pf-grid-3 {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 680px) {

          .pf-nav-inner {
            padding: 15px 18px;
          }

          .pf-nav-links {
            display: none;
          }

          .pf-hero-inner {
            padding:
              70px 20px
              80px;
          }

          .pf-section {
            padding:
              75px 20px;
          }

          .pf-grid-2,
          .pf-grid-3 {
            grid-template-columns: 1fr;
          }

          .pf-name {
            font-size:
              clamp(40px, 13vw, 62px);
          }

          .pf-footer {
            padding:
              40px 20px
              55px;

            flex-direction: column;

            align-items: flex-start;
          }

          .hero-meteor {
            animation-duration: 5s;
          }
        }

        /* =========================
           REDUCED MOTION
           ========================= */

        @media (prefers-reduced-motion: reduce) {

          html {
            scroll-behavior: auto;
          }

          .pf-bg-animation::before,
          .pf-orb,
          .pf-floating-dot,
          .pf-scanline,
          .pf-hero-card,
          .hero-meteor {
            animation: none !important;
          }

          .pf-card,
          .pf-button,
          .pf-icon-link,
          .pf-nav-links a {
            transition: none !important;
          }
        }

      `}</style>

      <div className="pf-page">

        {/* Animated Background */}
        <BackgroundAnimation />

        <div className="pf-content">

          {/* =========================
              NAVBAR
             ========================= */}

          <nav className="pf-nav">

            <div className="pf-nav-inner">

              <a
                href="#home"
                style={{
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                NSP
                <span
                  style={{
                    color: TOKENS.blue,
                  }}
                >
                  .
                </span>
              </a>

              <div className="pf-nav-links">

                <a href="#home">
                  Home
                </a>

                <a href="#education">
                  Education
                </a>

                <a href="#projects">
                  Projects
                </a>

                <a href="#skills">
                  Skills
                </a>

              </div>

            </div>

          </nav>

          {/* =========================
              HERO
             ========================= */}

          <section
            id="home"
            className="pf-hero"
          >

            <GridBackdrop />

            {/* Shooting Meteor */}
            <HeroMeteor />

            <div className="pf-hero-inner">

              <div className="pf-hero-grid">

                {/* LEFT SIDE */}

                <div>

                  <div className="pf-kicker">
                    Computer Science & Engineering
                  </div>

                  <h1 className="pf-name">
                    {PROFILE.name}
                  </h1>

                  <div className="pf-tagline">
                    {PROFILE.tagline}
                  </div>

                  <p className="pf-summary">
                    {PROFILE.summary}
                  </p>

                  <div className="pf-hero-actions">

                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="pf-button primary"
                    >
                      <Mail size={16} />

                      Contact Me
                    </a>

                    <a
                      href={PROFILE.github}
                      target="_blank"
                      rel="noreferrer"
                      className="pf-button"
                    >
                      <GithubIcon size={16} />

                      GitHub

                      <ArrowUpRight size={14} />
                    </a>

                    <a
                      href={PROFILE.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="pf-button"
                    >
                      <LinkedinIcon size={16} />

                      LinkedIn

                      <ArrowUpRight size={14} />
                    </a>

                  </div>

                </div>

                {/* RIGHT SIDE */}

                <div className="pf-hero-card">

                  <CornerMarks />

                  <div className="pf-hero-card-label">
                    Current Focus
                  </div>

                  <div className="pf-hero-card-title">
                    AI · ML · Computer Vision
                  </div>

                  <div className="pf-hero-card-text">
                    Exploring practical AI systems,
                    research-oriented machine learning,
                    image processing, Generative AI,
                    and intelligent applications.
                  </div>

                  <div
                    style={{
                      marginTop: 20,

                      display: "flex",
                      flexWrap: "wrap",

                      gap: 7,
                    }}
                  >

                    <Tag>
                      Machine Learning
                    </Tag>

                    <Tag>
                      Deep Learning
                    </Tag>

                    <Tag>
                      Computer Vision
                    </Tag>

                    <Tag>
                      GenAI
                    </Tag>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* =========================
              EDUCATION
             ========================= */}

          <section
            id="education"
            className="pf-section"
          >

            <SectionHeader
              eyebrow="01 / Education"
              title="Academic Journey"
              icon={
                <GraduationCap size={17} />
              }
            />

            <div className="pf-grid-2">

              {education.map((item) => (

                <div
                  className="pf-card"
                  key={item.degree}
                >

                  <CornerMarks />

                  <h3 className="pf-card-title">
                    {item.degree}
                  </h3>

                  <div className="pf-card-meta">
                    {item.institution}
                    {" · "}
                    {item.period}
                  </div>

                  <p className="pf-card-text">
                    {item.description}
                  </p>

                </div>

              ))}

              <div className="pf-card">

                <div className="pf-card-meta">
                  RELEVANT COURSEWORK
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 7,
                    marginTop: 16,
                  }}
                >

                  {skills["Coursework"].map(
                    (course) => (
                      <Tag key={course}>
                        {course}
                      </Tag>
                    )
                  )}

                </div>

              </div>

            </div>

          </section>

          {/* =========================
              ACTIVITIES
             ========================= */}

          <section className="pf-section">

            <SectionHeader
              eyebrow="02 / Leadership"
              title="Activities & Leadership"
              icon={
                <Award size={17} />
              }
            />

            <div className="pf-grid-3">

              {activities.map((a) => (

                <div
                  className="pf-card"
                  key={`${a.role}-${a.org}`}
                >

                  <CornerMarks />

                  <div
                    style={{
                      color: TOKENS.gold,

                      fontSize: 12,
                      fontWeight: 700,

                      textTransform:
                        "uppercase",

                      letterSpacing:
                        "0.08em",
                    }}
                  >
                    {a.role}
                  </div>

                  <div
                    style={{
                      marginTop: 10,

                      fontSize: 17,

                      lineHeight: 1.4,
                    }}
                  >
                    {a.org}
                  </div>

                </div>

              ))}

            </div>

          </section>

          {/* =========================
              SELECTED WORK
             ========================= */}

          <section
            id="projects"
            className="pf-section"
          >

            <SectionHeader
              eyebrow="03 / Selected Work"
              title="Projects"
              icon={
                <ArrowUpRight size={17} />
              }
            />

            <div className="pf-grid-3">

              {projects.map((p) => (

                <div
                  className="pf-card project-card"
                  key={p.name}
                >

                  <CornerMarks />

                  <div className="pf-card-meta">
                    {p.range}
                  </div>

                  <h3
                    className="pf-card-title"
                    style={{
                      marginTop: 10,
                    }}
                  >
                    {p.name}
                  </h3>

                  <p
                    className="pf-card-text project-desc"
                  >
                    {p.desc}
                  </p>

                  {/* STACK — ONLY ONCE */}

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginTop: 18,
                    }}
                  >

                    {p.stack.map((s) => (

                      <Tag
                        key={`${p.name}-${s}`}
                      >
                        {s}
                      </Tag>

                    ))}

                  </div>

                </div>

              ))}

            </div>

          </section>

          {/* =========================
              SKILLS
             ========================= */}

          <section
            id="skills"
            className="pf-section"
          >

            <SectionHeader
              eyebrow="04 / Toolkit"
              title="Skills"
              icon={
                <Award size={17} />
              }
            />

            <div className="pf-grid-2">

              {Object.entries(skills)
                .filter(
                  ([group]) =>
                    group !== "Coursework"
                )
                .map(([group, items]) => (

                  <div
                    className="pf-card pf-skill-group"
                    key={group}
                  >

                    <div className="pf-skill-title">
                      {group}
                    </div>

                    <div className="pf-skill-list">

                      {items.map((item) => (

                        <Tag key={item}>
                          {item}
                        </Tag>

                      ))}

                    </div>

                  </div>

                ))}

            </div>

          </section>

          {/* =========================
              FOOTER
             ========================= */}

          <footer className="pf-footer">

            <div>

              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                {PROFILE.name}
              </div>

              <div
                style={{
                  marginTop: 5,

                  color: TOKENS.muted,

                  fontSize: 12,
                }}
              >
                Building, learning & exploring AI.
              </div>

            </div>

            <div className="pf-footer-links">

              <a
                href={`mailto:${PROFILE.email}`}
                className="pf-icon-link"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>

              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="pf-icon-link"
                aria-label="GitHub"
              >
                <GithubIcon size={17} />
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="pf-icon-link"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={17} />
              </a>

            </div>

          </footer>

        </div>
      </div>
    </>
  );
}