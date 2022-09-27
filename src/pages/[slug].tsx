import { NextPage } from "next";
import { useRouter } from "next/router";

const CatchAll: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>Catch All - {slug}</h1>;
};

export default CatchAll;
