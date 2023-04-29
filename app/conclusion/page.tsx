import Evaluation from '~/components/widgets/Evaluation';
import Features2 from '~/components/widgets/Features2';
import { featuresData2 } from '~/shared/data';

const Page = () => {
  return (
    <>
      <Evaluation />
      <Features2 {...featuresData2} />
    </>
  );
};

export default Page;
