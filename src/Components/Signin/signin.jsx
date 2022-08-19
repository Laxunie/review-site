import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserAuth } from "../../Auth/AuthAPI";
import "../../css/main.css";

const SignIn = ({ createState, modalState }) => {
  const { SignIn, popupState, emailError, passwordError } = UserAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    await SignIn(e.email, e.password);
  };

  useEffect(() => {
    modalState(popupState);
  }, [popupState, modalState]);

  return (
    <div className="h-[500px] flex flex-col items-center py-6 justify-center">
      <div className="text-4xl">
        <h2>Review Site</h2>
      </div>
      <div className="py-6">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="uppercase">Email</label>
            <input
              {...register("email", {
                required: true,
              })}
            />
          </div>

          <div className="flex flex-col">
            <label className="uppercase">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          {emailError && <p className="text-red-600">{emailError}</p>}
          {passwordError && <p className="text-red-600">{passwordError}</p>}
          <div>
            <input className="w-full bg-blue-400" type="submit" />
          </div>
        </form>
        <p>
          Don't have an account?
          <span
            className="inline-block mx-2 text-blue-600 cursor-pointer"
            onClick={() => {
              createState(true);
            }}
          >
            Register here!
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
