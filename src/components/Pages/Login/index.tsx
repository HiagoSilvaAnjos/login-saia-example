import { Form } from "./Form";
import { ScreanContainer } from "./Screan-image";

import "./index.css";

export const LoginContainer = () => {
  return (
    <div className="md:p-[2rem] md:items-center justify-center flex w-full h-[100vh] min-h-[100vh] p-[1rem] bg-[#00000000] overflow-y-auto">
      <ScreanContainer />
      <Form />
    </div>
  );
};
