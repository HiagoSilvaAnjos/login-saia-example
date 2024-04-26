import logoSaia from "../../../../assets/images/logo-saia.png";
import logoUfpa from "../../../../assets/images/brasao-ufpa-normal.png";
import logoSaiaGrafico from "../../../../assets/images/logo-saia-grafico.png";

import "./index.css";

import { Eye, EyeSlash, Key, User } from "@phosphor-icons/react";

import { useState } from "react";

// import { useNavigate } from "react-router-dom";

export const Form = () => {
  // const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  console.log(userName);
  console.log(userPassword);

  const [styleInputPassword, setStyleInputPassword] = useState(false);
  const [styleInputUserName, setStyleInputUserName] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="loginFormContainer">
      <div className="loginFormImage">
        <hr />
        <div className="imageLogoSaia">
          <img src={logoSaia} alt="" />
        </div>
        <hr />
      </div>
      <div>
        <div className="formContentTitle">
          <figure className="imageSaiaDetail">
            <img src={logoSaiaGrafico} alt="" />
          </figure>
          <h2 className="titleForm">Faça login na plataforma</h2>
        </div>

        <div className="form-container">
          <form className="form-content">
            <div
              className={`form-input-container ${
                styleInputUserName ? "input-focus" : ""
              }`}
            >
              <label className="pl-2" htmlFor="userName">
                <User
                  className={
                    styleInputUserName ? "icon-user-focus" : "icon-user-blur"
                  }
                  size={30}
                  weight="bold"
                />
              </label>
              <input
                onFocus={() => setStyleInputUserName(true)}
                onBlur={() => setStyleInputUserName(false)}
                onChange={(e) => setUserName(e.target.value)}
                className="form-input"
                type="text"
                name="userName"
                id="userName"
                placeholder="Nome de Usuário"
                required
              />
            </div>
            <div
              className={`form-input-container ${
                styleInputPassword ? "input-focus" : ""
              }`}
            >
              <label className="pl-2" htmlFor="userPassword">
                <Key
                  className={
                    styleInputPassword ? "icon-user-focus" : "icon-user-blur"
                  }
                  size={30}
                  weight="bold"
                />
              </label>
              <input
                onFocus={() => setStyleInputPassword(true)}
                onBlur={() => setStyleInputPassword(false)}
                onChange={(e) => setUserPassword(e.target.value)}
                className="form-input"
                type={showPassword ? "text" : "password"}
                name="userPassword"
                placeholder="Senha"
                id="userPassword"
                required
              />
              <label
                className="pr-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlash
                    className={
                      styleInputPassword ? "icon-user-focus" : "icon-user-blur"
                    }
                    size={30}
                    weight="bold"
                  />
                ) : (
                  <Eye
                    className={
                      styleInputPassword ? "icon-user-focus" : "icon-user-blur"
                    }
                    size={30}
                    weight="bold"
                  />
                )}
              </label>
            </div>
            <button className="form-button">ENVIAR</button>
          </form>
        </div>
      </div>
      <div className="logoUFPA ">
        <a target="_blank" href="http://ufpa.br">
          <img src={logoUfpa} alt="Logo da UFPA" />
        </a>
      </div>
    </div>
  );
};
