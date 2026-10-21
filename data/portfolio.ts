export const portfolio = {
  name: 'Sahil Shaikh',
  brand: 'Sahil.dev',
  title: 'Software Engineer | Problem Solver',
  email: 'sahilshaikh10415@gmail.com',
  github: 'https://github.com/Sahil-Shaikh10415',
  linkedin: 'https://www.linkedin.com/in/sahil-shaikh-357465258',
  education: 'B.Tech CSE · NIT Raipur · Class of 2027',
  intro: 'I enjoy solving challenging algorithmic problems and building reliable software applications. I\'m interested in software engineering, backend systems, and developing solutions that are useful in the real world.',
  resume: {
    preview: 'https://drive.google.com/file/d/13tC76OUJlfMdHZRzySGSdWlB-bPzJNib/view?usp=sharing',
    download: 'https://drive.google.com/uc?export=download&id=13tC76OUJlfMdHZRzySGSdWlB-bPzJNib',
  },
  skills: [
    { title: 'Programming Languages', icon: 'code', items: ['C++', 'Java', 'JavaScript', 'Python', 'SQL'], featured: true },
    { title: 'Frontend Development', icon: 'layout', items: ['React.js', 'HTML5', 'CSS3', 'EJS'] },
    { title: 'Backend Development', icon: 'server', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Socket.IO'], featured: true },
    { title: 'Databases', icon: 'database', items: ['MongoDB', 'Mongoose'] },
    { title: 'Developer Tools', icon: 'wrench', items: ['Git', 'GitHub', 'Postman', 'Visual Studio Code'] },
    { title: 'CS Fundamentals', icon: 'braces', items: ['Data Structures and Algorithms', 'Object-Oriented Programming', 'Operating Systems', 'DBMS', 'Computer Networks'] },
  ],
  profiles: [
    { name: 'LeetCode', username: 'sahilshaikh_10415', url: 'https://leetcode.com/u/sahilshaikh_10415/', solved: '1,161 C++ · 1 JS', rating: 'Peak 1860', badge: 'Knight', accent: '#f4b942', verified: 'Baseline · 2026' },
    { name: 'Codeforces', username: 'sahil10415', url: 'https://codeforces.com/profile/sahil10415', solved: '327', rating: '1235 current · 1237 max', badge: 'Pupil', accent: '#8ab4f8', verified: 'Baseline · 2026' },
    { name: 'CodeChef', username: 'sahilshaikh_15', url: 'https://www.codechef.com/users/sahilshaikh_15', solved: '107', rating: '1548 highest', badge: '2-star coder', accent: '#d9b38c', verified: 'Baseline · 2026' },
    { name: 'GeeksforGeeks', username: 'sahilshaimwnc', url: 'https://www.geeksforgeeks.org/profile/sahilshaimwnc?tab=activity', solved: null, rating: null, badge: 'Profile active', accent: '#32a852', verified: 'Count needs review' },
  ],
  projects: [
    { name: 'MERN Quick-Chat-App', kicker: 'REAL-TIME COMMUNICATION', description: 'A real-time messaging application built with the MERN stack, focused on presence, conversations, and responsive interaction.', repo: 'https://github.com/Sahil-Shaikh10415/Quick-Chat-App', tags: ['React.js', 'Node.js', 'MongoDB', 'Socket.IO'], number: '01', tone: 'cyan' },
    { name: 'Wanderlust', kicker: 'TRAVEL LISTINGS', description: 'A travel and accommodation listing platform with authenticated CRUD flows, reviews, image uploads, and server-side validation.', repo: 'https://github.com/Sahil-Shaikh10415/Wanderlust', tags: ['Node.js', 'Express.js', 'MongoDB', 'EJS'], number: '02', tone: 'violet' },
    { name: 'Snake Game Website', kicker: 'BROWSER GAME', description: 'A focused browser-based Snake game built with the fundamentals of the web platform.', repo: 'https://github.com/Sahil-Shaikh10415/Snake-game-website', tags: ['HTML', 'CSS', 'JavaScript'], number: '03', tone: 'green' },
    { name: 'URL Shortener', kicker: 'WEB UTILITY', description: 'A URL-shortening application built as a practical exercise in routing, persistence, and backend software design.', repo: 'https://github.com/Sahil-Shaikh10415/Url-Shortener', tags: ['JavaScript', 'Node.js'], number: '04', tone: 'orange' },
  ],
} as const

export type Portfolio = typeof portfolio
