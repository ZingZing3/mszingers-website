import React from 'react';
import { Coffee } from 'lucide-react';
import Section from '../../ui/Section';
import StoryGrid from './StoryGrid';

const SpillingZingers = () => {
  return (
    <Section
      id="spilling-zingers"
      title="Spilling Zingers"
      subtitle="Telling my truth, one cup of tea at a time"
      icon={Coffee}
      variant="kahlo"
      className="bg-white"
    >
      <StoryGrid />
    </Section>
  );
};

export default SpillingZingers;