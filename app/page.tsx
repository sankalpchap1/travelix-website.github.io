import Hero from '~/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
import Features3 from '~/components/widgets/Features3';
import Steps from '~/components/widgets/Steps';
import Testimonial from '~/components/widgets/Testimonial';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import CallToAction2 from '~/components/widgets/CallToAction2';
import { callToActionData, featuresData } from '~/shared/data';
import Contact from '~/components/widgets/Contact';

export default function Page() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Features3 {...featuresData} />
      <Steps />
      <Testimonial />
      <FAQs2 />
      <Pricing />
      <Contact />
      <CallToAction2 {...callToActionData} />
    </>
  );
}
