import { content3Data, contentData } from '~/shared/data';
import Content from '~/components/widgets/Content';

const Page = () => {
  return (
    <>
      <Content {...contentData} />
      <Content {...content3Data} />
    </>
  );
};

export default Page;
