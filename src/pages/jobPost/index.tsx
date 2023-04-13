import Seo from "@/src/@common/Seo/Seo";
import JobPost from "../../features/RecruiterFlow/PostJob";
import { isUserNotLoggedIn } from "@/src/utils";
const PostJob = () => {
  return (
    <div>
      <Seo title="Post a Job" description="Post a Job" />
      <JobPost />
    </div>
  );
};

export default PostJob;

export const getServerSideProps = async (ctx: any) => {
  return isUserNotLoggedIn(ctx, 0);
};
