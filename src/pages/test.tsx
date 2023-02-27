import * as React from 'react';
import { Accordion } from '~/components';
import { TestimonialsCard } from '~/components/common/testimonials/testimonials-card';

const Page: React.FC = () => {
  return (
    <div style={{ padding: 50 }}>
      Hi man
      <Accordion>
        <>Head</>
        <>Body</>
      </Accordion>
      <hr />
      <h1>YO</h1>
      <TestimonialsCard />
    </div>
  );
};

export default Page;
