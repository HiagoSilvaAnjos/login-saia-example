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
      <div className="">
        <div className="formContentTitle">
          <figure className="imageSaiaDetail">
            <img src={logoSaiaGrafico} alt="" />
          </figure>
          <h2 className="titleForm">Faça login na plataforma</h2>
        </div>
        <form className="w-full flex flex-col gap-[2.4rem] items-center animationForm">
          <div className="flex items-center justify-center w-full gap-2 border-b border-black/20">
            <label className="pl-2" htmlFor="userName">
              <User size={30} color="#0000004d" weight="bold" />
            </label>
            <input
              className="flex-1 p-3 outline-none placeholder:font-bold placeholder:text-black/30"
              type="text"
              name="userName"
              id="userName"
              placeholder="Nome de Usuário"
              required
            />
          </div>
          <div className="flex items-center justify-center w-full gap-2 border-b border-black/20">
            <label className="pl-2" htmlFor="userPassword">
              <Key size={30} color="#0000004d" weight="bold" />
            </label>
            <input
              className="flex-1 p-3 outline-none placeholder:font-bold placeholder:text-black/30"
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
          <button className="bg-[#63C0D4] w-full p-[18px] rounded-xl text-xs md:mb-[10rem] mb-[6rem] text-white font-bold transition-all ease-out duration-[0.5s] hover:bg-[#4d93a3]">
            ENVIAR
          </button>
        </form>
      </div>
      <a className="logoUFPA" target="_blank" href="http://ufpa.br">
        <img src={logoUfpa} alt="Logo da UFPA" />
      </a>
    </div>
  );
};
