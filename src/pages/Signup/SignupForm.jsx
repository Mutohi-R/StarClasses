import styles from "./Signup.module.css";
import Input from "@ui/Form/Input";
import Checkbox from "@ui/Form/Checkbox";
import Button from "@ui/Button/Button";

const SignupForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} action="" className="grid gap-5">
      <div className={styles.informationGroup}>
        <Input type={"text"} placeHolder={""} Label={"Name"} />
        <Input type={"text"} placeHolder={""} Label={"Username"} />
        <Input type={"email"} placeHolder={""} Label={"Email address"} />
        <Input type={"text"} placeHolder={""} Label={"Phone number"} />
        <Input type={"password"} placeHolder={""} Label={"Password"} />
        <Input type={"password"} placeHolder={""} Label={"Confirm password"} />
      </div>

      <div className="grid gap-1">
        <p className="fs-300 text-neutral-400">Select course category</p>
        <div className={styles.courseGroup}>
          <Checkbox label="Mathematics" />
          <Checkbox label="Commerce" />
          <Checkbox label="Languages" />
          <Checkbox label="Computer science" />
          <Checkbox label="Test prep" />
          <Checkbox label="Fine arts" />
          <Checkbox label="Personal development" />
          <Checkbox label="Technology" />
        </div>
      </div>

      <div className="grid gap-2">
        <Button label="Sign up" type="primary" size="large" />
        <Button label="Continue with Google" type="secondary" size="large" />
        <Button label="Continue with Apple" type="secondary" size="large" />
        <Button label="Continue with Email" type="secondary" size="large" />
        <div className="mx-auto">
          <Button label="Already have an account?" type="link" />
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
