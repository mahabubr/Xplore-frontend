import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";

const Tourist = async () => {
  const session = await getServerSession(authOptions);
  console.log({ session });

  return <div>Enter</div>;
};

export default Tourist;
