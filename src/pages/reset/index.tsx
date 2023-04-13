
import Seo from "@/src/@common/Seo/Seo";
import Reset from "../../features/Auth/ResetPassword/Reset";

const ResetPage = () => {
  return (
    <div>
      <Seo title="Reset Your Password" description="Reset Your Password" />
      <Reset />
    </div>
  );
};

export default ResetPage;
