import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  //FILL HERE 3.7
  const roleIndex = roles.indexOf(role);
  const activityIndex = activities.indexOf(activity);

  
  return roleIndex >= activityIndex && activityIndex !== -1;
};

export default useIsVerified;
