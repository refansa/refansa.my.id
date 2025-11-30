import type { Messages } from './types'

const en: Messages = {
  common: {
    blog: 'Blog',
    projects: 'Projects',
    github: 'Github',
    email: 'Email',
    pgp: 'PGP Public Key',
  },
  home: {
    introduction: {
      welcome: 'Welcome, Old & New Friends!',
      me: "I'm Refansa",
      passionate: 'A Passionate',
      developer: 'Software Developer',
      supporter: 'And a Supporter of Open Source Software Movement.',
    },
    about: {
      title: 'A bit about me',
      intro: "I'm a Software Developer from Jakarta, Indonesia 🇮🇩.",
      niceToMeetYou: 'Senang berkenalan denganmu!',
      niceToMeetYouDesc: 'Nice to meet you!',
      humbleAbode:
        "This is my humble internet abode, where I sometimes blog about programming, software development, game development, and 3D modeling as part of my daily work. However, I mainly do web development, so that's probably what you will commonly see.",
      loveSimplicity:
        "I love nothing more than diving into complex projects, but that doesn't mean I admire complexity over simplicity, quite the contrary in fact. It always amaze me how people turn a complex problems into a simple, digestable format for a simpleton like me to understand.",
      openSource:
        'As a supporter of open source, I believe that sharing knowledge and collaborating on projects is essential for the advancement of technologies.',
      archBtw: 'I use',
      archDesc:
        'Arch Linux, a lightweight and flexible Linux® distribution that tries to Keep It Simple.',
      archBtwSuffix: 'btw',
    },
    contact: {
      title: 'Contact',
      email: 'Email',
      tel: 'Tel',
    },
    timeline: {
      title: 'My Journey',
      items: {
        '2018': {
          title: 'Hello, World!',
          description:
            'Wrote my first line of code. Initially getting exposed to programming through Minecraft modding.',
        },
        '2021': {
          title: 'Freelancing',
          description:
            'Started taking freelance projects and building websites for clients through high school program.',
        },
        '2023': {
          title: 'First Career',
          description:
            'Landed my first full-time job as a Web Developer at PT Qtera Mandiri. (Still Employed)',
        },
        Present: {
          title: 'Exciting Times!',
          description: 'Founded a small indie game development studio called Thumbleweed Studio.',
        },
      },
    },
  },
  underConstruction: {
    title: 'Not Implemented',
    message: 'Sorry! The page is currently under construction.',
    goHome: 'Go Home',
  },
  projects: {
    title: 'Projects',
    description: 'A collection of my projects and experiments.',
    status: 'Status',
    type: 'Type',
    sortBy: 'Sort by:',
    newest: 'Newest',
    oldest: 'Oldest',
    noProjects: 'No projects found matching the selected filters.',
    backToProjects: 'Back to Projects',
    projectLinks: 'Project Links',
    viewRepository: 'View Repository',
    liveDemo: 'Live Demo',
    publishedOn: 'Published On',
    filterStatus: {
      all: 'All',
      maintained: 'Maintained',
      completed: 'Completed',
      archived: 'Archived',
      abandoned: 'Abandoned',
    },
    filterType: {
      all: 'All',
      personal: 'Personal',
      contribution: 'Contribution',
    },
  },
  notFound: {
    title: 'Not Found',
    message: "You are trying to access a page that doesn't exist.",
    goHome: 'Go Home',
  },
}

export default en
