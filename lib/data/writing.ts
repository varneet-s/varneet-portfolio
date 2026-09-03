export interface Article {
  slug: string;
  num: string;
  date: string;
  title: string;
  source: string;
  type: string;
  frameColor: 'cyan' | 'pink' | 'orange' | 'purple';
  description: string;
  contentHtml: string;
  externalLink?: {
    label: string;
    url: string;
  };
}

export const articles: Article[] = [
  {
    slug: 'requirements-gathering-in-ba',
    num: '#04',
    date: 'MAR 2026',
    title: 'Requirements Gathering in Business Analysis',
    source: 'Microsoft BA Cert',
    type: 'ARTICLE',
    frameColor: 'cyan',
    description:
      'Writing down a requirement is only the starting point — the real work is managing, refining, and prioritizing as things change.',
    contentHtml: `
      <p>What I’ve learned is this: writing down a requirement is only the starting point. The real work is in managing it — refining, validating, prioritizing, and adjusting as things change.</p>
      <p>I’ve completed 4 out of 6 courses in the Microsoft Business Analyst certification so far. The early modules — Excel, data handling, and Visio — felt familiar. They helped sharpen what I already knew.</p>
      <p>But once I moved into requirement gathering and requirement engineering, things shifted. The process felt abstract at first: new terminology, layered structure, different ways of thinking.</p>
      <p>Then it started to click. I learned how to:</p>
      <ul>
        <li>Define requirements clearly — not just describe what I assumed</li>
        <li>Distinguish between functional and non-functional needs</li>
        <li>Break down what stakeholders actually expect — and why clarity matters so much</li>
        <li>See how weak requirements lead to bigger risks than missing features</li>
      </ul>
      <p>Later modules introduced tools like backlog management, epics, and user stories — all aimed at structure, clarity, and continuous refinement.</p>
      <p>I’ve started noticing how often structure shapes clarity — not just in projects, but in how I approach decisions.</p>
      <p>Two more courses to go. Still learning. Still showing up.</p>
    `,
    externalLink: {
      label: 'View Microsoft Certification Credential ↗',
      url: 'https://coursera.org/share/c34218bdf0dd290456336eda30f04592',
    },
  },
  {
    slug: 'what-progress-actually-looks-like',
    num: '#03',
    date: 'MAR 2026',
    title: 'What Progress Actually Looks Like',
    source: 'Reflection',
    type: 'ARTICLE',
    frameColor: 'pink',
    description:
      'How understanding business analysis shifted my daily thinking — from mapping coffee ideas to building consistent habits.',
    contentHtml: `
      <p>Lately, I’ve been thinking about what progress actually looks like. I guess it’s not always visible in the short run — or even limited to work.</p>
      <p>Since I started understanding how business analysis works, my thinking has shifted — not just in learning, but in everyday decisions. I’ve started questioning the why behind things more often — even outside work.</p>
      <p>Yesterday, I was casually exploring how to start a small coffee roasting business. Without meaning to, I started mapping it using BA tools like BAM. A few months ago, that wouldn’t have happened.</p>
      <p>Progress also looks like small, personal changes that stay consistent:</p>
      <ul>
        <li>A short callisthenics session and run every day</li>
        <li>Reading every day — mostly fiction, usually at night</li>
        <li>Eating better, moving more — not perfectly, but with intention</li>
        <li>Staying consistent on LinkedIn, one post at a time</li>
      </ul>
      <p>None of this is impressive on its own. But when it starts becoming part of your normal, you notice it.</p>
      <p>How do you track your own progress — and know when it’s real?</p>
    `,
    externalLink: {
      label: 'View Original Post on LinkedIn ↗',
      url: 'https://www.linkedin.com/feed/update/urn:li:activity:7426625300320567296',
    },
  },
  {
    slug: 'deciding-to-take-a-pause',
    num: '#02',
    date: 'FEB 2026',
    title: 'Deciding to Take a Pause',
    source: 'Career Pivot',
    type: 'ARTICLE',
    frameColor: 'orange',
    description:
      'Stepping back to rethink my path — moving from performance metrics to understanding underlying business problems with clarity.',
    contentHtml: `
      <p>Six months ago, I decided to take a pause. At the time, I didn’t have a new role lined up. I just knew I wanted to step back and rethink what kind of work I wanted to grow into.</p>
      <p>My interest in data started earlier — during a short project where I worked on research and analysis. That’s when I realised I enjoyed making sense of patterns more than just working with performance metrics. It stuck with me, even as I shifted back into a creative role after that.</p>
      <p>I was drawn to the idea of understanding business problems more deeply — figuring out what needs attention, why it matters, and how to move forward with clarity. That’s when I started exploring Business Analysis.</p>
      <p>Since then, I’ve been learning — one piece at a time. I started with a fundamentals course. Then books. Then practice.</p>
      <p>Some days it feels clear. Some days it doesn’t. But I’m glad I took the time to step into this field with intention. I’m building slowly — and starting to apply what I’ve been learning along the way.</p>
      <p>What helped you turn learning into real experience?</p>
    `,
    externalLink: {
      label: 'View Original Post on LinkedIn ↗',
      url: 'https://www.linkedin.com/feed/update/urn:li:activity:7424100206398349312',
    },
  },
  {
    slug: 'from-social-media-manager-to-ba',
    num: '#01',
    date: 'FEB 2026',
    title: 'From Social Media Manager to Business Analyst',
    source: 'BA Cert',
    type: 'ARTICLE',
    frameColor: 'purple',
    description:
      'Looking beyond marketing campaigns to understand the broader business problems behind decisions — starting with BA fundamentals.',
    contentHtml: `
      <p>A while ago, I was working as a social media manager at Labour Law Advisor and doing what I was already familiar with. Over time, I realised I wanted to look beyond campaigns and understand the broader business problems behind decisions.</p>
      <p>That curiosity led me to explore Business Analysis. The Business Analysis field is new to me. Most of the concepts in Business Analysis Fundamentals were things I was encountering for the first time.</p>
      <p>The course introduced me to core concepts such as stakeholder management, problem diagnosis, and risk management, along with other fundamentals. It challenged how I think about problems and decisions.</p>
      <p>To dive deeper into these concepts, I’ve started reading <em>Start With Why</em>, a Lean Six Sigma book, and <em>Strategic Management: Concepts and Cases</em> (Pearson).</p>
      <p>I’m still early in this transition, but I’m learning step by step.</p>
      <p>What made you want to explore a new field? I’d love to hear your thoughts.</p>
    `,
    externalLink: {
      label: 'View Business Analysis Certificate ↗',
      url: 'https://coursera.org/share/7c7fffc3c9e8845be9610eec29a90f8c',
    },
  },
];
