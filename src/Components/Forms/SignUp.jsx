import Button from "../Buttons/Button";
import InputField from "../Input/InputField";


function SignUpForm({ onSubmit, toggleFormSwitchType }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <h2 className="font-bold tracking-wider text-2xl mb-6">Create Account</h2>
      <div className="flex">
        <InputField
          placeholder="First Name"
          variant="solid"
          className="w-full"
        />
        <InputField
          placeholder="Last Name"
          variant="solid"
          className="w-full"
        />
      </div>
      <InputField placeholder="Email" variant="solid" />
      <InputField placeholder="password" variant="solid" type="password" />
      <InputField
        placeholder="confirm password"
        variant="solid"
        type="password"
      />
      <div className="flex lg:block">
        <Button
          type="submit"
          label={"Create Account"}
          variant="filled"
          className="bg-[#2F6CE5] my-5 w-full rounded-full "
        />
        {/* Switch on mobile */}
        <button
          type="button"
          onClick={toggleFormSwitchType}
          className="block lg:hidden text-gray-800 underline font-semibold text-xs flex-1/2 cursor-pointer"
        >
          or,Sign In
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <Button
          label={"Sign up with Facebook"}
          variant="outlined"
          icon={<img src="/fb_logo.png" className="h-4 w-4" />}
        />
        <Button
          label={"Sign up with Google"}
          variant="outlined"
          icon={<img src="/google.svg.png" className="h-4 w-4" />}
        />
      </div>
    </form>
  );
}
export default SignUpForm;
