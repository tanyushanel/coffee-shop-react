import { Tab } from "../../components/Tabs/Tab/Tab";
import { tabImages } from "../../constants/data";
import { Tabs } from "./../../components/Tabs/Tabs";
import { Layout } from "./../../layouts/Layout";

const Menu = () => {
  return (
    <Layout>
      <main>
        <article>
          <h3 className="center">
            Behind each of our cups hides an
            <span className="accent-txt"> amazing surprise</span>
          </h3>
          <Tabs>
            {tabImages.map((tabImg) => {
              return (
                <Tab
                  label={tabImg.category}
                  src={tabImg.src}
                  key={tabImg.category}
                />
              );
            })}
          </Tabs>
        </article>
      </main>
    </Layout>
  );
};
export default Menu;
