import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

interface IPrivateRoute {
  component: ReactNode;
}

const PrivateRoute = ({ component }: IPrivateRoute) => {
  //FILL HERE 3.6
  const { index } = useParams<{ index: string }>();
  const floorIndex = parseInt(index || "0");
  const floorAccess = useSelector(
    (state: {
      floorAccess: {
        floorAccess: [boolean, boolean, boolean, boolean, boolean];
      };
    }) => state.floorAccess.floorAccess
  );
  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState<boolean>(false);

  useEffect(() => {
    if (floorIndex >= 0 && floorIndex < floorAccess.length) {
      setHasAccess(floorAccess[floorIndex]);
    }
  }, [floorAccess, floorIndex]);

  if (hasAccess) {
    return { component };
  } else {
    navigate("/forbidden");
    return null;
  }
};

export default PrivateRoute;
