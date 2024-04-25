import logoSaia from "../../../../assets/images/logo-saia.png";
import logoUfpa from "../../../../assets/images/brasao-ufpa-normal.png";
import logoSaiaGrafico from "../../../../assets/images/logo-saia-grafico.png";

import "./index.css";
import { Eye, Key, User } from "@phosphor-icons/react";

export const Form = () => {
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
            <div className="form-input-container">
              <label className="pl-2" htmlFor="userName">
                <User size={30} color="#0000004d" weight="bold" />
              </label>
              <input
                className="form-input"
                type="text"
                name="userName"
                id="userName"
                placeholder="Nome de Usuário"
                required
              />
            </div>
            <div className="form-input-container">
              <label className="pl-2" htmlFor="userPassword">
                <Key size={30} color="#0000004d" weight="bold" />
              </label>
              <input
                className="form-input"
                type="password"
                name="userPassword"
                placeholder="Senha"
                id="userPassword"
                required
              />
              <label className="pr-2">
                <Eye size={30} color="#0000004d" weight="bold" />
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
