import { content3Data, content4Data } from '~/shared/data';
import Content from '~/components/widgets/Content';
import Challenges from '~/components/widgets/Challenges';

const Page = () => {
  return (
    <>
      <Challenges {...content3Data} />
      <Content {...content4Data} />
    </>
  );
};

export default Page;
