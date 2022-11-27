import { useContext, useEffect } from "react";
import { AuthContext } from "../context/useAuth";
import { api } from "../services/api";

export default function Dashbord() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get("/me").then((response) => console.log(response));
  }, []);

  return <h1>Bem vindo {user?.email}</h1>;
}
