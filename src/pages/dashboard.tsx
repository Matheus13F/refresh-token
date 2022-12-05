import { useContext, useEffect } from "react";
import { Can } from "../components/Can";
import { AuthContext } from "../context/useAuth";
import { useCan } from "../hooks/useCan";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSRRAuth";

export default function Dashbord() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api
      .get("/me")
      .then((response) => console.log("resultado dashboard"))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Bem vindo {user?.email}</h1>
      <Can permissions={["metrics.list"]}>
        <span>Metricas</span>
      </Can>
    </div>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx: any) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get("/me");
  console.log(response.data);

  return {
    props: {},
  };
});
