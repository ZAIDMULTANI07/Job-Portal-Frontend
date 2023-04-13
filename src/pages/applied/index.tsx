

import Seo from "@/src/@common/Seo/Seo";
import Applied from "../../features/CandidateFlow/AppliedJobs";
import { isUserNotLoggedIn } from "@/src/utils";
const AppliedJobs = () => {
  return (
    <div>
      <Seo title="Applied Jobs" description="Applied Jobs" />
      <Applied />
    </div>
  );
};

export default AppliedJobs;

export const getServerSideProps = async (ctx: any) => {
  return isUserNotLoggedIn(ctx, 1);
};
