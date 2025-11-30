export const siteConfig = {
  name: 'Muhammad Refansa Ali Muzky',
  nickname: 'Refansa',
  email: 'refansa@thumbleweed.com',
  tel: '(+62) 812-8543-3284',
  url: 'https://refansa.my.id',
  description: 'A humble internet abode.',
  bio: 'A passionate, self-taught Software Developer from Jakarta, Indonesia. Patron of Open Source Software Movement, specializing in web development, game development, and 3D modeling.',
  keywords: [
    'Muhammad Refansa Ali Muzky',
    'Refansa',
    'Software Developer',
    'Web Developer',
    'Jakarta',
    'Indonesia',
    'Open Source',
    'Programming',
    'Game Development',
    '3D Modeling',
    'Next.js',
    'React',
    'TypeScript',
  ],
  location: {
    city: 'Jakarta',
    country: 'Indonesia',
    countryCode: 'ID',
  },
  social: {
    github: 'refansa',
    twitter: '@refansa',
  },
  twitter: '@refansa',

  get links() {
    return siteLinks
  },
}

export const siteLinks = {
  github: 'https://github.com/refansa',
  email: `mailto:${siteConfig.email}`,
  tel: `tel:${siteConfig.tel}`,
}

export type SiteConfig = typeof siteConfig
export type SiteLinks = typeof siteLinks
