import { X } from "lucide-react";
import { useState } from "react";
import SignInForm from "./Forms/SignInForm";
import SignUpForm from "./Forms/SignUp";

export default function AuthModal({ onClose, onSubmit }) {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-end lg:items-center justify-center">
      <div className="relative w-full lg:w-[736px] h-[70%] lg:h-[513px] bg-white rounded-t-2xl lg:rounded-lg shadow-lg flex flex-col overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 cursor-pointer"
        >
          <X className="h-5 w-5 text-gray-700" />
        </button>

        {/* Green Banner */}
        <div className="hidden lg:flex items-center bg-green-100 text-green-800 h-[50px]   px-4 text-sm font-medium">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto">
          {/* Left: Form */}
          <div className="w-full lg:w-1/2 py-6 px-6 lg:px-9">
            {isSignUp ? (
              <SignUpForm onSubmit={onSubmit} toggleFormSwitchType={() => setIsSignUp(false)} />
            ) : (
              <SignInForm onSubmit={onSubmit} toggleFormSwitchType={() => setIsSignUp(true)}/>
            )}
          </div>

          {/* Right: Image and extras */}
          <div className="hidden lg:flex w-1/2 mt-8 flex-col items-center justify-between">
            <div className="text-sm text-gray-700">
              {isSignUp ? (
                <p>
                  Already have an account?{" "}
                  <button
                    onClick={() => setIsSignUp(false)}
                    className="text-blue-600 font-medium"
                  >
                    Sign In
                  </button>
                </p>
              ) : (
                <p>
                  Don’t have an account?{" "}
                  <button
                    onClick={() => setIsSignUp(true)}
                    className="text-blue-600 font-medium"
                  >
                    Sign Up
                  </button>
                </p>
              )}
            </div>

            <img
              src="/atg_illustration.png"
              alt="Auth Illustration"
              className="w-80 h-80 object-contain"
            />

            {isSignUp && (
              <p className="text-xs text-gray-500 text-center px-4 mb-9">
                By signing up, you agree to our Terms & conditions,
                <br /> Privacy policy
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
