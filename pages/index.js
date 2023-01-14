import Head from "next/head";
import DemoBuilder from "../src/components/DemoBuilder";
import BuilderGrid from "../src/components/layout/BuilderGrid";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Demo | Build UI</title>
      </Head>

      <DemoBuilder>
        <BuilderGrid />
      </DemoBuilder>
    </div>
  );
};

export default Home;
