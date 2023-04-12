import useToken from "../../hooks/useToken/useToken";
import { useEffect } from "react";
import Layout from "../Layout/Layout";

const App = (): JSX.Element => {
  const { getToken } = useToken();

  useEffect(() => {
    getToken();
  }, [getToken]);

  return <Layout />;
};

export default App;
