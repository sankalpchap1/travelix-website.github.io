import { content2Data, contentData } from '~/shared/data';
import Content from '~/components/widgets/Content';

const Page = () => {
  return (
    <>
      <Content {...contentData} />
      <Content {...content2Data} />
    </>
  );
};

export default Page;
