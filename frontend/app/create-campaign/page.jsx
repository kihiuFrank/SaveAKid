import PageContainer from "../../components/containers/PageContainer";
import ComingSoon from "../../components/utils/comingSoon/comingsoon";

const Campaign = () => {
  return (
    <PageContainer>
      <div className="flex items-center justify-center flex-col  h-full my-12 mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <ComingSoon />
      </div>
    </PageContainer>
  );
};

export default Campaign;
