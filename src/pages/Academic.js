import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons/faFileLines';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';

import publications from '../data/publications';
import social from '../data/contact';
import degrees from '../data/resume/degrees';
import '../static/css/academic.scss';

const { PUBLIC_URL } = process.env;
const ME = 'Chunwei Xing';

// ---- Intro comes from the shared about.md ----
const markdown = raw('../data/about.md');

const sectionBetween = (start, end) => {
  const afterStart = markdown.split(`# ${start}`)[1] || '';
  return afterStart.split(`# ${end}`)[0].trim();
};

const introMd = sectionBetween('Intro', 'News');

// education, newest first
const sortedDegrees = [...degrees].sort((a, b) => b.start_year - a.start_year);

// ---- Curated academic news (reverse chronological; edit here) ----
const newsItems = [
  { date: 'Aug 2024', text: 'Started the PhD program in ESE at [University of Pennsylvania](https://www.upenn.edu/).' },
  { date: 'Nov 2023', text: 'Graduated from [ETH Zürich](https://ethz.ch/en.html) with a M.S. in Robotics, Systems and Control.' },
  { date: 'Oct 2023', text: 'Joined [RPG](https://rpg.ifi.uzh.ch/), University of Zurich, as a Research Assistant.' },
  { date: 'Jul 2023', text: 'Master thesis at [RPG](https://rpg.ifi.uzh.ch/) received the highest score.' },
  { date: 'Sep 2020', text: 'Started the M.S. in Robotics, Systems and Control at [ETH Zürich](https://ethz.ch/en.html).' },
];

// strip <p> wrapping so inline markdown sits on one line
const inlineRenderers = { paragraph: ({ children }) => <>{children}</> };

// bold the author's own name in a publication's author list.
// keys use the running character offset, which is unique per node.
const highlightMe = (authors) => {
  const nodes = [];
  let offset = 0;
  authors.split(ME).forEach((part, idx) => {
    if (idx > 0) {
      nodes.push(<span className="me" key={`me-${offset}`}>{ME}</span>);
      offset += ME.length;
    }
    nodes.push(<React.Fragment key={`p-${offset}`}>{part}</React.Fragment>);
    offset += part.length;
  });
  return nodes;
};

const pubLink = (href, label) => (href ? <a href={href}>{label}</a> : null);

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  const saved = window.localStorage.getItem('academic-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  const prefersDark = window.matchMedia
    && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

const Academic = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    window.localStorage.setItem('academic-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <HelmetProvider>
      <Helmet>
        <title>Chunwei Xing</title>
        <meta name="description" content="Chunwei Xing — PhD student, University of Pennsylvania." />
      </Helmet>

      <main className="academic" data-theme={theme}>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
        </button>
        {/* ---------------- Header ---------------- */}
        <header className="intro">
          <div className="intro__photo">
            <img src={`${PUBLIC_URL}/images/Chunwei_Xing.png`} alt="Chunwei Xing" />
          </div>
          <h1 className="intro__name" data-testid="heading">Chunwei Xing</h1>
          <p className="intro__role">
            PhD Student · Electrical &amp; Systems Engineering · University of Pennsylvania
          </p>
          <nav className="links">
            {social.map((s) => (
              <a key={s.label || s.link} href={s.link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={s.icon} />
                {s.label}
              </a>
            ))}
            <a href={`${PUBLIC_URL}/sources/Resume_Chunwei_Xing.pdf`} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFileLines} />
              CV
            </a>
          </nav>
          <div className="intro__bio">
            <ReactMarkdown source={introMd} escapeHtml={false} />
          </div>
        </header>

        {/* ---------------- News ---------------- */}
        <section className="section">
          <h2 className="section__title">News</h2>
          <div className="news">
            <ul>
              {newsItems.map((n) => (
                <li key={n.date + n.text.slice(0, 16)}>
                  <span className="news__date">{n.date}</span>
                  <span className="news__text">
                    <ReactMarkdown source={n.text} escapeHtml={false} renderers={inlineRenderers} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------- Publications ---------------- */}
        <section className="section">
          <h2 className="section__title">Publications</h2>
          {publications.map((p) => (
            <article className="pub" key={p.title}>
              {p.image && (
                <div className="pub__media">
                  <img src={`${PUBLIC_URL}${p.image}`} alt={p.title} />
                </div>
              )}
              <div className="pub__body">
                <p className="pub__title">
                  {p.title_link ? <a href={p.title_link}>{p.title}</a> : p.title}
                </p>
                <p className="pub__authors">{highlightMe(p.author)}</p>
                <p className="pub__venue">{p.journal} {p.date}</p>
                <p className="pub__links">
                  {pubLink(p.title_link, 'Paper')}
                  {pubLink(p.video_link, 'Video')}
                  {pubLink(p.code_link, 'Code')}
                  {pubLink(p.slides_link, 'Slides')}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* ---------------- Education ---------------- */}
        <section className="section">
          <h2 className="section__title">Education</h2>
          {sortedDegrees.map((d) => (
            <div className="cv-row" key={d.school + d.degree}>
              <span className="cv-row__when">{d.start_year} – {d.end_year}</span>
              <span className="cv-row__what">
                <span className="where">
                  {d.link ? <a href={d.link}>{d.school}</a> : d.school}
                </span>
                <span className="sub"> — {d.degree}</span>
              </span>
            </div>
          ))}
        </section>
      </main>
    </HelmetProvider>
  );
};

export default Academic;
