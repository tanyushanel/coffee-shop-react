import cx from "classnames";
import { useState } from "react";
import { ButtonRefresh } from "./ButtonRefresh/ButtonRefresh";
import { Tab } from "./Tab/Tab";
import { TabImg } from "./Tab/TabImg/TabImg";
import style from "./Tabs.module.scss";

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const switchTab = (label) => {
    setActiveTab(label);
  };

  return (
    <>
      <ul className={cx(style.tabContainer, "flex-center gap-12 margin-40")}>
        {children.map((child) => {
          const { label, src } = child.props;

          return (
            <TabImg
              src={src}
              category={label}
              className={activeTab === label ? style.active : ""}
              onClick={() => switchTab(label)}
              key={label}
            />
          );
        })}
      </ul>

      <article>
        <ul
          id="tab-content"
          className={cx(style.gridMenuContainer, "flex-center gap-40")}
        >
          <Tab label={activeTab} />
        </ul>
        <ButtonRefresh />
      </article>
    </>
  );
};
