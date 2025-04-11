import NewAccountInfo from "../newAccountInfo";
import SocialLinks from "../social";
import Button from "../ui/button";
import Input from "../ui/input";

const LoginForm = ({ onForgotClick }) => {
  return (
    <section className="flex items-center flex-col justify-center w-full relative z-10 px-5 lg:px-0 max-w-[730px]">
      <h1 className="text-2xl font-bold text-center mb-8 text-white">
        Log in to your Royal Enfield account
      </h1>

      <form
        className="w-full flex justify-center flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
          <Input
            id="email"
            type="text"
            placeholder="Email/Mobile Number"
            aria-label="Email or Mobile Number"
            containerStyle="lg:w-[350px]"
          />
          <Input
            id="password"
            type="password"
            placeholder="Password"
            aria-label="Password"
            containerStyle="lg:w-[350px]"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
          <div className="w-full lg:w-[350px]">
            <Button type="submit">Login</Button>
          </div>
          <button
            type="button"
            className="text-sm text-white font-bold"
            onClick={onForgotClick}
          >
            Forget password?
          </button>
        </div>
      </form>

      <NewAccountInfo className="lg:mt-20" />
      <SocialLinks facebookLogin="/" googleLogin="/" />
    </section>
  );
};

export default LoginForm;
