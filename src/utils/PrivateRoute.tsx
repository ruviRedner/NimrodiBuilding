import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

interface IPrivateRoute {
  component: ReactNode;
}

const PrivateRoute = ({ component }: IPrivateRoute) => {
  const { index } = useParams<{ index: string }>();
  const floorIndex = parseInt(index || "0");

  
  const floorAccess = useSelector(
    (state: { floorAccess: { floorAccess: [boolean, boolean, boolean, boolean, boolean] } }) =>
      state.floorAccess.floorAccess
  );

  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState<boolean>(false);

  useEffect(() => {
    
    if (floorIndex >= 0 && floorIndex < floorAccess.length) {
      setHasAccess(floorAccess[floorIndex]);
    }
  }, [floorAccess, floorIndex]);

  
  useEffect(() => {
    if (!hasAccess) {
      navigate("/forbidden");
    }
  }, [hasAccess, navigate]);

  
  if (hasAccess) {
    return <>{component}</>;
  }

  
  return null;
};

export default PrivateRoute;
