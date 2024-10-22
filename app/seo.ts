import { Metadata } from 'next';

const defaultMetadata: Metadata = {
  title: 'My Awesome App',
  description: 'Welcome to My Awesome App, the best app in the universe!',
  openGraph: {
    title: 'My Awesome App',
    description: 'Welcome to My Awesome App, the best app in the universe!',
    url: 'https://www.myawesomeapp.com',
    siteName: 'My Awesome App',
    images: [
      {
        url: 'https://www.myawesomeapp.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Awesome App',
    description: 'Welcome to My Awesome App, the best app in the universe!',
    images: ['https://www.myawesomeapp.com/twitter-image.jpg'],
  },
  // Add more metadata fields as needed
};

export default defaultMetadata;