import { Layout } from "./../../layouts/Layout";
import { Tabs } from "./../../components/Tabs/Tabs";

const Menu = () => {
  return (
    <Layout>
      <article className="about-container">
        <h3 className="center">
          Behind each of our cups hides an
          <span className="accent-txt"> amazing surprise</span>
        </h3>
        <Tabs />
      </article>
    </Layout>
  );
};
export default Menu;
