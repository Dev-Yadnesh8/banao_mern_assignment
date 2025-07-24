import InputField from "../Input/InputField";
import Button from "../Buttons/Button";

function SignInForm({ onSubmit,toggleFormSwitchType }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <h2 className="font-bold tracking-wider text-2xl mb-6">Sign In</h2>

      <InputField placeholder="Email" variant="solid" />
      <InputField placeholder="Password" variant="solid" type="password" />

      <div className="flex lg:block">
        <Button
          type="submit"
          label={"Sign In"}
          variant="filled"
          className="bg-[#2F6CE5] my-5 w-full rounded-full "
        />
        {/* Switch on mobile */}
        <button
          type="button"
          onClick={toggleFormSwitchType}
          className="block lg:hidden text-gray-800 underline font-semibold text-xs flex-1/2 cursor-pointer"
        >
          or,Create Account
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <Button
          type="submit"
          label={"Sign in with Facebook"}
          variant="outlined"
          icon={<img src="src/assets/fb_logo.png" className="h-4 w-4" />}
        />
        <Button
          type="submit"
          label={"Sign in with Google"}
          variant="outlined"
          icon={<img src="src/assets/google.svg.png" className="h-4 w-4" />}
        />

        <p className="text-xs text-gray-500 underline cursor-pointer mb-8 mt-6 ">
          Forgot Password?
        </p>
      </div>
    </form>
  );
}

export default SignInForm;
