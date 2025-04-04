import React, { useEffect, useState } from "react";
import { GetUserUseCase } from "../../Domain/useCases/userLocal/GetUserLocal";
import { User } from "../../Domain/entity/User";

export const useUserLocal = () => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    getSession();
  }, []);

  const getSession = async () => {
    const user = await GetUserUseCase();
    setUser(user);
    console.log("SESSION USER" + JSON.stringify(user));
  };
  return {
    user,
    getSession,
  };
};
