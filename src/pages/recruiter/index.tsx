import Seo from "@/src/@common/Seo/Seo";
import RecruiterFlow from "../../features/RecruiterFlow/Home";
import { isUserNotLoggedIn } from "@/src/utils";

const Recruiter = () => {
  return (
    <div>
      <Seo title="Jobs posted by you" description="Jobs posted by you" />
      <RecruiterFlow />
    </div>
  );
};

export default Recruiter;

export const getServerSideProps = async (ctx: any) => {
  return isUserNotLoggedIn(ctx, 0);
};
