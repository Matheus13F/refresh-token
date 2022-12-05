import { useContext } from "react";
import { AuthContext } from "../context/useAuth";
import { validadeUserPermissions } from "../utils/validateUserPermissions";

type UserCanParams = {
  permissions?: string[];
  roles?: string[];
};

export function useCan({ permissions = [], roles = [] }: UserCanParams) {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) return false;

  const userHasValidPermissions = validadeUserPermissions({
    user,
    permissions,
    roles,
  });

  return userHasValidPermissions;
}
