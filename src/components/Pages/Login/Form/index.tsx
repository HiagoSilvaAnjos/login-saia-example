import logoSaia from "../../../../assets/images/logo-saia.png";
import logoUfpa from "../../../../assets/images/brasao-ufpa-normal.png";
import logoSaiaGrafico from "../../../../assets/images/logo-saia-grafico.png";

import "./index.css";

import { Eye, EyeSlash, Key, User } from "@phosphor-icons/react";

import { FormEvent, useState } from "react";

export const Form = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [status200, setStatus200] = useState(false);
  const [status400, setStatus400] = useState(false);

  const [styleInputPassword, setStyleInputPassword] = useState(false);
  const [styleInputUserName, setStyleInputUserName] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  // enviar o corpo da requisição  contendo os dados do formulário
  const body = new URLSearchParams();
  body.append("username", userName);
  body.append("password", userPassword);

  const handleEventSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Configurando o fetch
      const configFetch = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: body,
      };

      const response = await fetch(
        `https://katudv.com/api/saia-dev/login`,
        configFetch
      );

      const responseJSON = await response.json();

      console.log(responseJSON);

      if (response.status === 200) {
        setStatus200(true);

        setTimeout(() => {
          // Salvando os tokens de acesso nos cookies
          const token = responseJSON.access_token;
          const permissoes = responseJSON.permissoes;
          const username = responseJSON.username;
          document.cookie = `permissoes=${permissoes};max-age=5400`;
          document.cookie = `username=${username};max-age=5400`;
          document.cookie = `token=${token};max-age=5400`;
          window.location.href = "http://katudv.com/projeto/saia-dev/dashboard";
        }, 1000);
      } else {
        setStatus400(true);
        setTimeout(() => {
          setStatus400(false);
        }, 1000);
      }
    } catch (error) {
      console.log("error");
    }
  };

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
          <form onSubmit={handleEventSubmitForm} className="form-content">
            <div
              className={`form-input-container 
              ${styleInputUserName ? "input-focus" : ""} 
              ${status200 ? "input-focus-success" : ""} 
              ${status400 ? "input-focus-error" : ""}`}
            >
              <label className="pl-2" htmlFor="userName">
                <User
                  className={`
                  ${styleInputUserName ? "icon-user-focus" : "icon-user-blur"} 
                  ${status200 ? "icon-user-focus-success" : ""} 
                  ${status400 ? "icon-user-focus-error" : ""}`}
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
                value={userName}
                placeholder="Nome de Usuário"
                required
              />
            </div>
            <div
              className={`form-input-container 
              ${styleInputPassword ? "input-focus" : ""} 
              ${status200 ? "input-focus-success" : ""} 
              ${status400 ? "input-focus-error" : ""}`}
            >
              <label className="pl-2" htmlFor="userPassword">
                <Key
                  className={`
                  ${styleInputPassword ? "icon-user-focus" : "icon-user-blur"} 
                  ${status200 ? "icon-user-focus-success" : ""} 
                  ${status400 ? "icon-user-focus-error" : ""}`}
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
                    className={`
                    ${
                      styleInputPassword ? "icon-user-focus" : "icon-user-blur"
                    } 
                    ${status200 ? "icon-user-focus-success" : ""} 
                    ${status400 ? "icon-user-focus-error" : ""}`}
                    size={30}
                    weight="bold"
                  />
                ) : (
                  <Eye
                    className={`
                    ${
                      styleInputPassword ? "icon-user-focus" : "icon-user-blur"
                    } 
                    ${status200 ? "icon-user-focus-success" : ""} 
                    ${status400 ? "icon-user-focus-error" : ""}`}
                    size={30}
                    weight="bold"
                  />
                )}
              </label>
            </div>
            <button
              className={`form-button 
              ${status200 ? "button-focus-success" : ""} 
              ${status400 ? "button-focus-error" : ""} `}
            >
              ENVIAR
            </button>
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
