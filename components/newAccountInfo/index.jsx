import Link from "next/link";
import Icons from "../ui/icons";

const NewAccountInfo = ({ className }) => {
  return (
    <div className={`mt-8 ${className}`}>
      <p className="text-2xl font-bold text-center text-white">
        New to royalenfield.com?
      </p>
      <div className="mt-4 text-center flex items-center">
        <Link
          href="https://www.royalenfield.com/in/en/forms/sign-up/"
          target="_blank"
          className="group border border-white h-9 text-white hover:bg-white hover:text-black transition duration-300 flex items-center justify-center min-w-[182px] px-4 mx-auto font-bold gap-2"
        >
          Create an account{" "}
          <span className="inline-block group-hover:animate-wiggleX">
            <Icons.CaretRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NewAccountInfo;
