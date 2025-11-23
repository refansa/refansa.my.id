export type Dictionary = {
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
      selfTaught: string
      selfTaughtDesc: string
      developer: string
      patron: string
    }
    about: {
      title: string
      intro: string
      niceToMeetYou: string
      niceToMeetYouDesc: string
      humbleAbode: string
      loveComplexity: string
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
  notFound: {
    title: string
    message: string
    goHome: string
  }
  footer: {
    createdWith: string
    by: string
  }
}

export const en: Dictionary = {
  common: {
    blog: 'Blog',
    projects: 'Projects',
    github: 'Github',
    email: 'Email',
  },
  home: {
    introduction: {
      welcome: 'Welcome, New & Old Friends!',
      me: "I'm Refansa",
      passionate: 'A Passionate,',
      selfTaught: 'self-taught',
      selfTaughtDesc: 'College is too expensive nowadays.',
      developer: 'Software Developer',
      patron: 'And a Patron of Open Source Software Movement.',
    },
    about: {
      title: 'A bit about me',
      intro: "I'm a Software Developer from Jakarta, Indonesia 🇮🇩.",
      niceToMeetYou: 'Senang berkenalan denganmu!',
      niceToMeetYouDesc: 'Nice to meet you!',
      humbleAbode:
        'This is my humble internet abode, where I sometimes blog about programming, software development, game development, and 3D modeling as part of my daily work. However, I mainly do web development, so that’s probably what you will commonly see.',
      loveComplexity:
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
  },
  notFound: {
    title: 'Not Found',
    message: "You are trying to access a page that doesn't exist.",
    goHome: 'Go Home',
  },
  footer: {
    createdWith: 'Created with ❤️',
    by: 'by',
  },
}

export const id: Dictionary = {
  common: {
    blog: 'Blog',
    projects: 'Projects',
    github: 'Github',
    email: 'Email',
  },
  home: {
    introduction: {
      welcome: 'Selamat Datang, Teman Baru & Lama!',
      me: 'Saya Refansa',
      passionate: 'Seseorang yang bersemangat untuk belajar secara',
      selfTaught: 'otodidak',
      selfTaughtDesc: 'Kuliah terlalu mahal untuk zaman sekarang.',
      developer: 'sebagai Software Developer',
      patron: 'Pendukung penuh Gerakan Open Source Software.',
    },
    about: {
      title: 'Sedikit tentang saya',
      intro: 'Saya seorang Software Developer dari Jakarta, Indonesia 🇮🇩.',
      niceToMeetYou: 'Nice to meet you!',
      niceToMeetYouDesc: 'Senang berkenalan denganmu!',
      humbleAbode:
        'Ini adalah my humble internet abode, di mana saya terkadang menulis blog tentang pemrograman, pengembangan perangkat lunak, pengembangan game, dan pemodelan 3D sebagai bagian dari pekerjaan sehari-hari saya. Namun, saya terutama melakukan pengembangan web, jadi mungkin itu yang akan sering Anda lihat.',
      loveComplexity:
        'Saya paling suka mendalami project-project kompleks, tetapi itu tidak berarti saya mengagumi kerumitan di atas kesederhanaan, justru sebaliknya. Saya selalu kagum bagaimana orang mengubah masalah yang kompleks menjadi format yang sederhana dan mudah dicerna untuk seorang simpleton seperti saya.',
      openSource:
        'Sebagai seorang pendukung open source, saya percaya bahwa berbagi pengetahuan dan berkolaborasi dalam project sangat penting untuk kemajuan teknologi.',
      archBtw: 'I use',
      archDesc:
        'Arch Linux, distribusi Linux® yang ringan dan fleksibel yang mencoba untuk Tetap Sederhana.',
      archBtwSuffix: 'btw',
    },
    contact: {
      title: 'Kontak',
      email: 'Email',
      tel: 'Telepon',
    },
  },
  notFound: {
    title: 'Tidak Ditemukan',
    message: 'Anda mencoba mengakses halaman yang tidak ada.',
    goHome: 'Kembali ke Beranda',
  },
  footer: {
    createdWith: 'Dibuat dengan ❤️',
    by: 'oleh',
  },
}
