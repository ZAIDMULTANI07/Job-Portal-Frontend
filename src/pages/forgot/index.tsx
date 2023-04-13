
import Seo from "@/src/@common/Seo/Seo";
import Forgot from "../../features/Auth/ForgotPassword/Forgot";

const ForgotPage = () => {
  return (
    <div>
      <Seo title="Forgot your password" description="Forgot your password"/>
      <Forgot />
    </div>
  );
};

export default ForgotPage;
