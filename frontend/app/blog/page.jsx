import React from "react";
import ComingSoon from "../../components/utils/comingSoon/comingsoon";
import PageContainer from "../../components/containers/PageContainer";

export default function Blog() {
  return (
    <PageContainer>
      <div className="flex items-center justify-center flex-col  h-full my-12 mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <ComingSoon />
      </div>
    </PageContainer>
  );
}
