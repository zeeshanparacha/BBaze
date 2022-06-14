import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../../store/effects.js/users";
const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
    // eslint-disable-next-line
  }, []);

  const users = useSelector((state) => state.users.users);
  return (
    <div>
      {users.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </div>
  );
};
export default LandingPage;
