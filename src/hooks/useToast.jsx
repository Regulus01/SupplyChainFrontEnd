import { useRef } from "react";

const useToast = () => {
  const toastRef = useRef(null);

  const showError = (errors, toast) => {
    if (errors.length == 0) {
      toast.current.show({
        severity: "error",
        summary: "Erro Desconhecido",
        detail: "Erro Desconhecido",
        life: 3000,
      });
    }

    errors.forEach((err) => {
      toast.current.show({
        severity: "error",
        summary: "Erro: " + err.code,
        detail: err.message,
        life: 3000,
      });
    });
  };

  const showSuccess = (toast) => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Registro criado com sucesso",
      life: 3000,
    });
  };

  return { toastRef, showError, showSuccess };
};

export default useToast;
