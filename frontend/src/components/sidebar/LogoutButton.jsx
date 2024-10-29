import { CgLogOut } from "react-icons/cg";
import { useLogOut } from "../../hooks/useLogOut";

const LogoutButton = () => {
  const { loading, logout } = useLogOut();

  return (
    <div className="mt-auto">
      {!loading ? (
        <CgLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;