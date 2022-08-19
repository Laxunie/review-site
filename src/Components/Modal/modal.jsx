import React, { useState } from "react";
import { MdOutlineBackspace, MdOutlineClose } from "react-icons/md";
import { Create, Signin } from "../";
import { UserAuth } from "../../Auth/AuthAPI";
import "../../css/main.css";

const Modal = ({ modalState }) => {
  const [create, setCreate] = useState(false);
  const { setPasswordError, setEmailError } = UserAuth();
  return (
    <div className="fixed h-full w-full top-0 bg-gray-400/20 flex justify-center items-center">
      <div className="flex justify-center items-center relative w-[600px] max-h-max bg-white rounded-md text-black h-fit">
        <div className="absolute top-1 right-1">
          <MdOutlineClose
            onClick={() => {
              modalState(false);
              setPasswordError("");
              setEmailError("");
            }}
          />
        </div>
        {create && (
          <div className="absolute top-1 left-1">
            <MdOutlineBackspace
              onClick={() => {
                setCreate(false);
              }}
            />
          </div>
        )}
        {create ? (
          <Create modalState={modalState} />
        ) : (
          <Signin createState={setCreate} modalState={modalState} />
        )}
      </div>
    </div>
  );
};

export default Modal;
