export type Messages = {
  common: {
    blog: string
    projects: string
    github: string
    email: string
  }
  home: {
    introduction: {
      welcome: string
      me: string
      passionate: string
      developer: string
      patron: string
    }
    about: {
      title: string
      intro: string
      niceToMeetYou: string
      niceToMeetYouDesc: string
      humbleAbode: string
      loveSimplicity: string
      openSource: string
      archBtw: string
      archDesc: string
      archBtwSuffix: string
    }
    contact: {
      title: string
      email: string
      tel: string
    }
  }
  underConstruction: {
    title: string
    message: string
    goHome: string
  }
  projects: {
    title: string
    description: string
    status: string
    type: string
    sortBy: string
    newest: string
    oldest: string
    noProjects: string
    backToProjects: string
    projectLinks: string
    viewRepository: string
    liveDemo: string
    publishedOn: string
    filterStatus: {
      all: string
      maintained: string
      completed: string
      archived: string
      abandoned: string
    }
    filterType: {
      all: string
      personal: string
      contribution: string
    }
  }
  notFound: {
    title: string
    message: string
    goHome: string
  }
}
