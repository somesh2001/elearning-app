import supabase from "@/supabaseClient";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const router = useRouter();

  const [formEmailValid, setEmailIsValid] = useState(true);
  const [formPasswordValid, setPasswordIsValid] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    //getting the values
    const enteredEmailValue = emailRef.current.value;
    const enteredPasswordValue = passwordRef.current.value;

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (!emailRegex.test(enteredEmailValue)) {
      setEmailIsValid(false);
      return;
    } else {
      setEmailIsValid(true);
    }
    if (!passwordRegex.test(enteredPasswordValue)) {
      setPasswordIsValid(false);
      return;
    } else {
      console.log("asd");
      setPasswordIsValid(true);
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: enteredEmailValue,
      password: enteredPasswordValue,
    });

    if (data.user.user_metadata.type === "student") {
      router.replace("/home");
    }
    if (data.user.user_metadata.type === "instructor") {
      router.replace("/Instructor");
    }
    if (error) {
      return;
    }
    console.log(data);

    //after user validation happens
    router.replace("/admin");
  };

  let classNameEmail = !formEmailValid
    ? `${[styles.control, styles.invalid].join(" ")}`
    : `${styles.control}`;
  let classNamePassword = !formPasswordValid
    ? `${[styles.control, styles.invalid].join(" ")}`
    : `${styles.control}`;

  let passwordError;
  if (!formPasswordValid) {
    passwordError = (
      <p style={{ color: "orangered", fontSize: "14px" }}>
        Password must be at least 8 characters long and contain at least one
        lowercase letter, one uppercase letter, one number, and one special
        character
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={classNameEmail}>
        <label htmlFor="title">Email Id</label>
        <input type="text" id="email" ref={emailRef} />
        {!formEmailValid && (
          <p style={{ color: "orangered", fontSize: "14px" }}>
            Please Enter Correct Email
          </p>
        )}
      </div>
      <div className={classNamePassword}>
        <label htmlFor="address">Password</label>
        <input type="text" id="password" ref={passwordRef} />
        {passwordError}
      </div>
      <div className={styles.actions}>
        <button>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;

// const supabase = createClient(
//   "https://cdwdhedavgkgpexhthtx.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkd2RoZWRhdmdrZ3BleGh0aHR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ3MDU0NTIsImV4cCI6MTk5MDI4MTQ1Mn0.XtLqfRc4QVqWrBRzKUl0Val_H7cQFLplVlJ9_leOIeM"
// );
// const Login = () => {
//   const router = useRouter();

//   supabase.auth.onAuthStateChange(async (event) => {
//     if (event !== "SIGNED_OUT") {
//       router.push("/Success");
//     } else {
//       router.push("/");
//     }
//   });
//   return (
//     <div className="App">
//       <Auth
//         supabaseClient={supabase}
//         appearance={{ theme: ThemeSupa }}
//         theme="dark"
//       />
//     </div>
//   );
// };
