import { uploads } from './assets.js';
import { resume } from './resume.js';

export const profile = {
  name: 'Sakthivel V',
  firstName: 'Sakthivel',

  heroTagline: 'WELCOME TO MY PORTFOLIO',
  heroHeading: "Hi, I'm Sakthivel V",
  heroDescription:
    'Aspiring technology professional with a keen interest in software development and innovation. Focused on learning, growing, and developing the skills needed to contribute effectively in the technology sector.',

  roles: ['Student',' Aspiring Full Stack Developer'],

  profileImage: uploads.photos.profile,

  bio:
    'Driven by curiosity and a passion for technology, I am a Computer Science and Engineering student focused on building strong technical and analytical skills. I am committed to continuous learning, professional growth, and embracing new challenges in the ever-evolving world of technology.',
  objective:
    'Motivated to learn, grow, and contribute through real-world projects while continuously improving my technical and problem-solving abilities.',

  email: 'v.sakthivel5126@gmail.com',
  location: 'Erode, Tamil Nadu.',

  links: {
    linkedin: 'https://www.linkedin.com/in/sakthivel-v-366b7429a',
    github: 'https://github.com/sakthivel5126',
    leetcode: 'https://leetcode.com/u/Sakthivel_5/',
  },

  resumePath: resume.path,
};
