import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { Metadata } from 'next'

import './global.css'
import '@mantine/core/styles.css'
import { resolver, theme } from '../styles/theme'

export const metadata: Metadata = {
  authors: [
    {
      name: 'Refansa',
      url: 'https://github.com/Refansa',
    },
  ],
  title: {
    template: 'Refansa - Software Developer | %s',
    default: 'Refansa - Software Developer',
  },
  description: "Refansa's portfolio website",
  viewport: 'width=device-width, initial-scale=1',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={process.env.APP_LANG ?? 'en'}>
      <head>
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
          crossOrigin='anonymous'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap'
          rel='preload'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Gabarito:wght@400;500;600;700;800;900&display=swap'
          rel='preload'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='preload'
        />
        <ColorSchemeScript
          defaultColorScheme={'dark'}
          forceColorScheme={'dark'}
        />
      </head>
      <body>
        <MantineProvider
          defaultColorScheme={'dark'}
          forceColorScheme={'dark'}
          cssVariablesResolver={resolver}
          theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
