import type { Messages } from './types'

const id: Messages = {
  common: {
    blog: 'Blog',
    projects: 'Projects',
    github: 'Github',
    email: 'Email',
  },
  home: {
    introduction: {
      welcome: 'Selamat Datang, Teman Lama dan juga Teman Baru!',
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
        'Ini adalah tempat bernaung sederhana saya di internet, di mana saya terkadang menulis blog tentang pemrograman, pengembangan perangkat lunak, pengembangan game, dan pemodelan 3D sebagai bagian dari pekerjaan sehari-hari saya. Namun, saya terutama melakukan pengembangan web, jadi mungkin itu yang akan sering Anda lihat.',
      loveSimplicity:
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
  underConstruction: {
    title: 'Belum Diimplementasi',
    message: 'Maaf! Halaman ini sedang dalam tahap pengembangan.',
    goHome: 'Kembali ke Beranda',
  },
  projects: {
    title: 'Projects',
    description: 'Koleksi project dan eksperimen saya.',
    status: 'Status',
    type: 'Tipe',
    sortBy: 'Urutkan:',
    newest: 'Terbaru',
    oldest: 'Terlama',
    noProjects: 'Tidak ada project yang ditemukan dengan filter yang dipilih.',
    backToProjects: 'Kembali ke Projects',
    projectLinks: 'Project Links',
    viewRepository: 'Lihat Repositori',
    liveDemo: 'Demo Langsung',
    publishedOn: 'Diterbitkan Pada',
    filterStatus: {
      all: 'Semua',
      maintained: 'Maintained',
      completed: 'Completed',
      archived: 'Archived',
      abandoned: 'Abandoned',
    },
    filterType: {
      all: 'Semua',
      personal: 'Personal',
      contribution: 'Kontribusi',
    },
  },
  notFound: {
    title: 'Tidak Ditemukan',
    message: 'Anda mencoba mengakses halaman yang tidak ada.',
    goHome: 'Kembali ke Beranda',
  },
}

export default id
