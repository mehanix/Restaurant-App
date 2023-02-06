import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import { API_URL } from "../../../api";
import { UserContext } from "../../../utils/providers/UserContextProvider";

const UserReservations = () => {
  const user = useContext(UserContext) as any;
  const [pastReservations, setPastReservations] = useState([]);
  const [activeReservations, setActiveReservations] = useState([]);

  useEffect(() => {
    console.log(user);
    axios.get(`${API_URL}/users/${user.user.id}/bookings`).then((res) => {
      console.log(res);
    });
  }, []);
  return <div>UserReservations</div>;
};

export default UserReservations;
