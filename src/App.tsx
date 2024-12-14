import React from 'react';
import AccessibilityFeatures from './components/ui/AccessibilityFeatures';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhoIsMSzingers from './components/sections/WhoIsMSzingers';
import WhatIsMS from './components/sections/WhatIsMS';
import MSStory from './components/sections/MSStory';
import MSAdventures from './components/sections/MSAdventures';
import SpillingZingers from './components/sections/SpillingZingers';
import RealZingers from './components/sections/RealZingers';
import UnspeakableZingers from './components/sections/UnspeakableZingers';
import SayItZinger from './components/sections/SayItZinger';
import FunZingers from './components/sections/FunZingers';
import FutureZingers from './components/sections/FutureZingers';
import MonthlyTingle from './components/sections/MonthlyTingle';
import TheseAreZingers from './components/sections/TheseAreZingers';
import ZiggyZinger from './components/sections/ZiggyZinger';
import ZiggyHoliday from './components/sections/ZiggyHoliday'; // Add this import
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <AccessibilityFeatures />
      <Navigation />
      <Hero />
      <main id="main-content">
        <ZiggyHoliday /> {/* Add this component */}
        <WhoIsMSzingers />
        <WhatIsMS />
        <MSStory />
        <MSAdventures />
        <SpillingZingers />
        <RealZingers />
        <UnspeakableZingers />
        <SayItZinger />
        <FunZingers />
        <FutureZingers />
        <MonthlyTingle />
        <TheseAreZingers />
        <ZiggyZinger />
      </main>
      <Footer />
    </div>
  );
}

export default App;