import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import Steps from "@/components/Steps";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      <div className="mt-20">
      <Steps />
      </div>
     
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
