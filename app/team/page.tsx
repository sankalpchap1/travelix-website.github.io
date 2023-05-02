import Team from '~/components/widgets/Team';
import Contact from '~/components/widgets/Contact';
import Features2 from '~/components/widgets/Features2';
import { featuresData2 } from '~/shared/data';

const Page = () => {
  return (
    <>
      <Team />
      <Contact/>
      <Features2 {...featuresData2}/>
    </>
  );
};

export default Page;
