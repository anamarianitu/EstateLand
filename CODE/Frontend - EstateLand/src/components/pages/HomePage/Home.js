import React from 'react';
import { SliderData } from "../../data/SliderData"
import HomeIntro from '../../HomeIntro';
import Services from '../../sections/Services/Services';
import FeaturedPropertySection from '../../sections/FeaturedProperties/FeaturedPropertySection';
import AgentsSection from '../../sections/Agents/AgentsSection';

function Home() {
  return (
    <>
      <HomeIntro slides={SliderData} />
      <Services />
      <FeaturedPropertySection />
      <AgentsSection />
    </>
  );
}

export default Home;
