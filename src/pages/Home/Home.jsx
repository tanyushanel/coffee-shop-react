import { About } from "./../../components/About/About";
import { Intro } from "./../../components/Intro/Intro";
import { Mobile } from "./../../components/Mobile/Mobile";
import { Slider } from "./../../components/Slider/Slider";
import { Layout } from "./../../layouts/Layout";

import { sliderImages } from "../../constants/data";

const Home = () => {
  return (
    <Layout>
      <Intro />
      <Slider slides={sliderImages} />
      <About />
      <Mobile />
    </Layout>
  );
};
export default Home;
