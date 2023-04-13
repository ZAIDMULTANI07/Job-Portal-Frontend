
import Seo from "@/src/@common/Seo/Seo";
import CandidateFlow from "../../features/CandidateFlow/Apply";
import { isUserNotLoggedIn } from "@/src/utils";

const Candidate = () => {
  return (
    <div>
      <Seo title="Jobs for you" description="Jobs for you" />
      <CandidateFlow />
    </div>
  );
};

export default Candidate;

export const getServerSideProps = async (ctx: any) => {
  return isUserNotLoggedIn(ctx, 1);
};
