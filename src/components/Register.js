import { useState } from "react";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";

import styled from "styled-components";
import TopBar from "../shared/TopBar";
import Input from "../shared/Input";
import Button from "../shared/Button";
import * as api from "../services/auth";

export default function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [type, setType] = useState({
    PasswordLabel: true,
    ConfirmPasswordLabel: true,
  });

  function handleSubmit(event) {
    event.preventDefault();
    const { name, email, password, confirmPassword } = userData;
    if (password !== confirmPassword) {
      alert("As senhas devem ser iguais.");
    } else {
      api
        .registerUser(name, email, password, confirmPassword)
        .then(() => {
          navigate("/login");
        })
        .catch((error) => {
          alert(error.data);
        });
    }
  }

  async function seePassword(label) {
    const a = !type.PasswordLabel;
    const b = !type.ConfirmPasswordLabel;
    console.log(a);
    label = label === "password" ? "password" : "confirmPassword";
    switch (label) {
      case "password":
        setType({ ...type, PasswordLabel: a });
        break;
      case "confirmPassword":
        setType({ ...type, ConfirmPasswordLabel: b });
        break;
    }
  }

  return (
    <>
      <TopBar justify={"flex-end"} linkRoute={"/"}>
        <ul>
          <Link to="/">
            <li>Início</li>
          </Link>
          <Link to="/login">
            <li className="entry">Entrar</li>
          </Link>
        </ul>
      </TopBar>
      
      <Form className="Container Form" onSubmit={handleSubmit}>
        <Input
          placeholder={"Nome"}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <Input
          placeholder={"Email"}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />

        <div className="passwordSection">
          <Input
            className="passwordInput"
            placeholder={"Senha"}
            type={type.PasswordLabel ? "password" : ""}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />

          <SeePassWordSection onClick={() => seePassword("password")}>
            {type.PasswordLabel ? (
              <BsFillEyeSlashFill className="eyeIcon" />
            ) : (
              <BsFillEyeFill className="eyeIcon" />
            )}
          </SeePassWordSection>
        </div>
        <div className="passwordSection">
          <Input
            className="passwordInput"
            placeholder={"Senha"}
            type={type.ConfirmPasswordLabel ? "password" : ""}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />

          <SeePassWordSection onClick={() => seePassword("confirmPassword")}>
            {type.ConfirmPasswordLabel ? (
              <BsFillEyeSlashFill className="eyeIcon" />
            ) : (
              <BsFillEyeFill className="eyeIcon" />
            )}
          </SeePassWordSection>
        </div>

        <Button label={"Cadastrar"} />
      </Form>
    </>
  );
}

const Form = styled.form`
  .passwordInput {
    margin-left: 30px;
  }

  .passwordSection {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
  }
`;

const SeePassWordSection = styled.form`
  .eyeIcon {
    font-size: 20px;
    color: green;
    cursor: pointer;
    margin-left: 10px;
  }
`;
