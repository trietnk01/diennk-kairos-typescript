import { getProfileById } from "apis/profile.api";
import IProfile from "models/IProfile";
import React, { useEffect } from "react";
function Home() {
  useEffect(() => {
    async function funcGetProfileById() {
      const resData: any = await getProfileById("/getProfileById");
      const profile: IProfile = resData.data;
      console.log("profile.name = ", (profile.name as string).length);
    }
    funcGetProfileById();
  }, []);
  return <div>Home</div>;
}

export default Home;
