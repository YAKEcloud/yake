import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy Bootstrapping",
    description: (
      <>
        YAKE was designed to get you up and running with your self hosted
        Gardener installation as quick as possible. Our helper scripts
        help you templating a basic configuration within minutes.
      </>
    ),
  },
  {
    title: "Declarative Configuration",
    description: (
      <>
        The GitOps-driven workflow enables a declarative configuration of your
        Gardener installation. This helps the operator to precisely track changes
        in the environment, and documents parts of the operations.
      </>
    ),
  },
  {
    title: "Easy Updates",
    description: (
      <>
        With our upgrade guides, staying up-to-date becomes a simple background
        task and your Gardener installation will always be equipped with the
        newest features.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
