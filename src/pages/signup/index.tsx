import Seo from "@/src/@common/Seo/Seo";
import Signup from "@/src/features/Auth/Signup/Signup";
import { isUserLoggedIn } from "@/src/utils";

const LoginPage = () => {
  return (
    <div>
      <Seo title="Signup" description="This is a Signup page"/>
      <Signup />
    </div>
  );
};

export default LoginPage;

export const getServerSideProps = async (ctx: any) => {
  return isUserLoggedIn(ctx);
};
