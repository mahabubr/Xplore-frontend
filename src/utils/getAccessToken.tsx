import { useSession } from "next-auth/react";

const GetNewAccessToken = () => {
  const { data: session } = useSession();

  // @ts-ignore
  const access_token = session?.user?.access_token;
  return access_token;
};

export default GetNewAccessToken;
