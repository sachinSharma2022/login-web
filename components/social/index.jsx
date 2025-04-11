"use client";
import Link from "next/link";
import Icons from "../ui/icons";

const SocialLinks = ({ facebookLogin, googleLogin }) => {
  return (
    <div className="mt-8 w-full">
      <p className="text-2xl font-bold text-center text-white mb-4">
        Or sign in via
      </p>
      <div className="flex items-center flex-col lg:flex-row gap-4 lg:gap-8 justify-center">
        <Link
          href={facebookLogin}
          className="group h-10 bg-primary px-4 w-full lg:w-auto lg:min-w-[205px] flex items-center justify-center text-white font-bold gap-2"
        >
          Sign in with Facebook
          <span className="inline-block group-hover:animate-wiggleX">
            <Icons.CaretRight />
          </span>
        </Link>

        <Link
          href={googleLogin}
          className="group h-10 bg-secondary px-4 w-full lg:w-auto lg:min-w-[205px] flex items-center justify-center text-white font-bold gap-2"
        >
          Sign in with Google
          <span className="inline-block group-hover:animate-wiggleX">
            <Icons.CaretRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
