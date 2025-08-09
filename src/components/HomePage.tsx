import React from 'react';
import Header from './Header';
import HeroCarousel from './HeroCarousel';
import FeaturedArticles from './FeaturedArticles';
import SocialImpact from './SocialImpact';
import NewsletterContact from './NewsletterContact';
import AboutRival from './AboutRival';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      <FeaturedArticles />
      <AboutRival />
      <SocialImpact />
      <NewsletterContact />
    </div>
  );
};

export default HomePage;