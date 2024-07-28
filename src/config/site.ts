export const siteConfig = {
  name: 'Refansa',
  email: 'm.refansa.am@gmail.com',
  tel: '(+62) 812-8543-3284',
  url: 'https://refansa.my.id',
  description: 'A humble internet abode.',
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
