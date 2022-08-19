import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserAuth } from "../../Auth/AuthAPI";
import "../../css/main.css";

const Create = ({ modalState }) => {
  const { CreateUser, popupState } = UserAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    CreateUser(e.email, e.password, e.username);
  };

  useEffect(() => {
    modalState(popupState);
  }, [popupState, modalState]);

  return (
    <div className="h-full flex flex-col items-center py-6 justify-center">
      <div className="text-4xl">
        <h2>Create an account</h2>
      </div>
      <div className="py-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-[400px] flex-wrap"
        >
          <div className="flex flex-col">
            <label>Username</label>
            <input
              className=""
              {...register("username", {
                required: true,
                minLength: 4,
                maxLength: 16,
              })}
            />
            {errors.username && (
              <span className="text-red-600">
                Username must be 4 to 16 characters
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label>Email</label>
            <input
              className=""
              {...register("email", {
                required: true,
                pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
            />
            {errors.email && (
              <span className="text-red-600">Email is invalid</span>
            )}
          </div>

          <div className="flex flex-col">
            <label>Password</label>
            <input
              className=""
              type="password"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 15,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              })}
            />
            {errors.password && (
              <span className="text-red-600">
                Password must be atleast 8 characters with a number and a symbol
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label>Confirm Password</label>
            <input
              className=""
              type="password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-600">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <div className="w-full flex justify-center">
            <input className="bg-blue-400" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
