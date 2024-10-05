import { useState } from "react";
import useToast from "./useToast";

export const useFetch = (toast) => {
  const urlBase = import.meta.env.VITE_APP_DEV_API_BASE_URL;

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const { showError, showSuccess } = useToast();

  const GetRequest = async (url) => {
    try {
      const response = await fetch(urlBase + url);
      const json = await response.json();
      setLoading(false);

      return json;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const PostRequest = (data, url) => {
    setLoading(true);

    fetch(urlBase + url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((r) => r.json())
      .then(
        (result) => {
          if (result.success) {
            showSuccess(toast);
            setResponse(result);
          }

          if (result.success === false) {
            showError(result.error, toast);
            setResponse(result);
          }
        },

        (error) => {
          showError([], toast);
          console.log(error);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return { toast, loading, response, GetRequest, PostRequest };
};
