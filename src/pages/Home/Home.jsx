import { About } from "./../../components/About/About";
import { Intro } from "./../../components/Intro/Intro";
import { Mobile } from "./../../components/Mobile/Mobile";
import { Slider } from "./../../components/Slider/Slider";
import { Layout } from "./../../layouts/MenuLayout";

export const Home = () => {
  return (
    <Layout>
      <Intro />
      <Slider />
      <About />
      <Mobile />
    </Layout>
  );
};
