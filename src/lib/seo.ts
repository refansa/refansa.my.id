import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  tags?: string[]
  noIndex?: boolean
  canonical?: string
}

/**
 * Generate comprehensive metadata for pages with SEO optimization
 * including Open Graph, Twitter Cards, and additional meta tags
 */
export function generateMetadata(props: SEOProps = {}): Metadata {
  const {
    title,
    description = siteConfig.description,
    image = `${siteConfig.url}/og-image.png`,
    url = siteConfig.url,
    type = 'website',
    publishedTime,
    modifiedTime,
    authors,
    tags,
    noIndex = false,
    canonical,
  } = props

  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const imageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`

  return {
    title: fullTitle,
    description,
    keywords: tags || siteConfig.keywords,
    authors: authors
      ? authors.map((name) => ({ name }))
      : [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    alternates: {
      canonical: canonical || url,
      languages: {
        en: `${siteConfig.url}/en`,
        id: `${siteConfig.url}/id`,
      },
    },
    openGraph: {
      type,
      locale: 'en_US',
      alternateLocale: ['id_ID'],
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: authors || [siteConfig.name],
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: siteConfig.twitter,
      site: siteConfig.twitter,
    },
    other: {
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
    },
  }
}

/**
 * Generate JSON-LD structured data for a person (website owner)
 */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.tel,
    jobTitle: 'Software Developer',
    description: siteConfig.bio,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jakarta',
      addressCountry: 'ID',
    },
    sameAs: [
      siteConfig.links.github,
      // Add more social profiles as needed
    ],
    knowsAbout: [
      'Software Development',
      'Web Development',
      'Game Development',
      '3D Modeling',
      'Open Source',
    ],
  }
}

/**
 * Generate JSON-LD structured data for the website
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: ['en', 'id'],
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }
}

/**
 * Generate JSON-LD structured data for a blog post
 */
export function generateArticleSchema(props: {
  title: string
  description: string
  url: string
  publishedTime: string
  modifiedTime?: string
  image?: string
  tags?: string[]
}) {
  const { title, description, url, publishedTime, modifiedTime, image, tags } = props

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    image: image || `${siteConfig.url}/og-image.png`,
    keywords: tags?.join(', '),
    inLanguage: 'en',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

/**
 * Generate JSON-LD structured data for breadcrumbs
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generate JSON-LD structured data for a software project
 */
export function generateProjectSchema(props: {
  title: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified?: string
  applicationCategory?: string
  operatingSystem?: string
  repoUrl?: string
  demoUrl?: string
  keywords?: string[]
}) {
  const {
    title,
    description,
    url,
    image,
    datePublished,
    dateModified,
    applicationCategory = 'DeveloperApplication',
    operatingSystem = 'Any',
    repoUrl,
    demoUrl,
    keywords,
  } = props

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    url,
    image: image || `${siteConfig.url}/og-image.png`,
    datePublished,
    dateModified: dateModified || datePublished,
    applicationCategory,
    operatingSystem,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    keywords: keywords?.join(', '),
    inLanguage: 'en',
    ...(repoUrl && { codeRepository: repoUrl }),
    ...(demoUrl && { sameAs: [demoUrl] }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}
