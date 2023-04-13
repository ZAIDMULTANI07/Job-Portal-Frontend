
import Seo from "@/src/@common/Seo/Seo";
import Login from "../../features/Auth/Login/Login";
import { isUserLoggedIn } from "@/src/utils";

const LoginPage = () => {
  return (
    <div>
      <Seo title="Login" description="This is a login page"/>
      <Login />
    </div>
  );
};

export default LoginPage;

export const getServerSideProps = async (ctx: any) => {
  return isUserLoggedIn(ctx);
};
