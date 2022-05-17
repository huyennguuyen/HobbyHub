import React, { useState } from "react";
import { Modal} from "../context/Modal"
import LoginForm from "./LoginForm";
import "./LoginForm.css"

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="nav-button" onClick={() => setShowModal(true)}>
        Login
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;