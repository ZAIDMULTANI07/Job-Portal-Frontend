import { Background } from "../@common/Background";


const NotFound = () => {
  return (
    <section className="relative">
      <Background height="h-[150px]" name="" display={true} />
      <div className="h-screen justify-center items-center flex z-20 absolute w-screen top-0">
        <div className="text-center">
          <img src="/Images/404.png" className="w-auto md:h-[500px] h-[400px]" alt="not found" />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
