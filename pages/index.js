import ForgotForm from "@/components/forgot";
import LoginForm from "@/components/login";
import { useState } from "react";

export default function Home() {
  const [showForgotForm, setShowForgotForm] = useState(false);
  return (
    <div
      className="bg-cover bg-no-repeat min-h-dvh flex items-center justify-center p-4 login-bg overflow-hidden"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2016/09/02/14/23/bike-rider-1639323_1280.jpg)",
        backgroundPosition: "center center",
      }}
    >
      {showForgotForm ? (
        <ForgotForm onBackClick={() => setShowForgotForm(false)} />
      ) : (
        <LoginForm onForgotClick={() => setShowForgotForm(true)} />
      )}
    </div>
  );
}
