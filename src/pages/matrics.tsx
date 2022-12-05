import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSRRAuth";

export default function Metrics() {
  return (
    <div>
      <h1>Metricas</h1>
    </div>
  );
}

export const getServerSideProps = withSSRAuth(
  async (ctx: any) => {
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get("/me");

    return {
      props: {},
    };
  },
  {
    permissions: ["metrics.list"],
    roles: ["administrator"],
  }
);
