import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({ text, type = "danger" }) =>
    /*  we are passing what we need to modify which is "({ text, type = "danger" })" */
    setAlert({
      show: true,
      text,
      type,
    });

  const hideAlert = ({ text, type = "danger" }) =>
    setAlert({
      show: false,
      text: " ",
      type: "danger",
    });

  return { alert, showAlert, hideAlert };
  /*   hooks doesnt return any jsx code it basically returns object or 
  an array in which you can pass these values  */
};

export default useAlert;
