import LayoutWrapper from './LayoutWrapper'
import './globals.css'

export const metadata = {
  title: {
    default: 'Fiscal Atelier CRM',
    template: '%s | Fiscal Atelier CRM',
  },

  description:
    'A modern CRM dashboard for managing transactions and users with a clean, fast, and intuitive interface.',

  applicationName: 'Fiscal Atelier CRM',

  keywords: [
    'CRM',
    'Dashboard',
    'Transactions',
    'User Management',
    'Next.js',
    'React',
    'Tailwind CSS',
    'Business Management',
    'Admin Dashboard',
    'Fiscal Atelier',
  ],

  authors: [
    {
      name: 'DEVBRO',
    },
  ],

  creator: 'DEVBRO',
  publisher: 'DEVBRO',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  openGraph: {
    title: 'Fiscal Atelier CRM',
    description: 'Manage your dashboard, transactions, and users with a modern CRM system.',
    url: 'https://full-frontend-exepl.vercel.app/',
    siteName: 'Fiscal Atelier CRM',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Fiscal Atelier CRM',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Fiscal Atelier CRM',
    description: 'Manage your dashboard, transactions, and users with a modern CRM system.',
    images: ['/banner.png'],
    creator: 't.me/DEV-BR0',
  },

  category: 'Business',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
