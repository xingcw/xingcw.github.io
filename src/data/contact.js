import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/xingcw',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/chunwei-xing-653a831a5/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:chxing@seas.upenn.edu',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://scholar.google.com/citations?user=eJnQQQcAAAAJ&hl=en',
    label: 'Google Scholar',
    icon: faGraduationCap,
  },
];

export default data;
