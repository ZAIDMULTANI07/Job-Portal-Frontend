export const isUserNotLoggedIn = (ctx: any, role: Number | undefined = undefined) => {
  if (!ctx.req.cookies?.token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  let userData = ctx.req.cookies?.userData;
  if(userData){
    userData = JSON.parse(userData);
    let destination = role === 0 ? "/candidate" : "/recruiter";
    if (role !== undefined) {
      if (userData.userRole !== role) {
        return {
          redirect: {
            destination: destination,
            permanent: false,
          },
        };
      }
    }
  }
  return {
    props: {},
  };
};

export const isUserLoggedIn = (ctx: any) => {
  let userData = ctx.req.cookies?.userData;
  if(userData){
    userData = JSON.parse(userData);
    let destination = userData.userRole === 0 ? "/recruiter" : "/candidate";
    return {
      redirect: {
        destination: destination,
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
