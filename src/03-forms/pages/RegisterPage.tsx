import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  password1: string;
}

export const RegisterPage = () => {
  const {
    email,
    name,
    password,
    password1,
    handleChange,
    handledSubmit,
    isValidEmail,
    onClickSubmit,
    reset,
  } = useForm<RegisterForm>({
    email: "",
    name: "",
    password: "",
    password1: "",
  });

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={(e) => handledSubmit(e)}>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => handleChange(e)}
         
          className={name.trim().length === 0 ? "has-error" : ""}
        />
        {name.trim().length === 0 && <span>name is required</span>}


        <input
          name="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>name is invalid</span>}


        <input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        {password.trim().length === 0 && <span>password is required</span>}
        {password.trim().length <= 6 && <span>password must be greater than 6 characters</span>}

        <input
          name="password1"
          type="password"
          placeholder="repeat pass"
          value={password1}
          onChange={handleChange}
        />
        {password1.trim().length === 0 && <span>password1 is required</span>}
        {password1.trim().length <= 6 && <span>password must be greater than 6 characters</span>}

        { !(password1.trim() === password.trim())  && <span>both passwords must be the same </span>}






        <button type="submit" onClick={onClickSubmit}>
          Submit
        </button>

        <button type="submit" onClick={reset}>
          Reset
        </button>
      </form>
    </div>
  );
};
