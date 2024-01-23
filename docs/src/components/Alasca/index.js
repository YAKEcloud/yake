import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Alasca() {
  return (
    <section className={styles.editions}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--8')}>
            <h3>A project by ALASCA</h3>
            <p>
              In January 2024, YAKE found its new home at <a href="https://alasca.cloud/">ALASCA</a> - a non-profit
              organisation for the (further) development of operational, open cloud infrastructures. ALASCA's mission
              revolves around the further development and provision of open source tools that not only enable but also
              facilitate the development and operation of customised cloud infrastructures.
            </p>
            <p>
              In addition to the practical development work on these projects, ALASCA also sees itself as a provider of
              knowledge on these topics - not only within the organisation, but also to the outside world, for example
              in the form of the ALASCA Tech Talks.
            </p>
            <p>
              With a strong, motivated community and the combined expertise of its members, ALASCA is driving forward
              digital sovereignty in Germany and Europe in the long term - also in collaboration with other open source
              initiatives and communities in the digital sector.
            </p>
          </div>
          <div className={clsx('col col--4')} style={{display: "flex", justifyContent: "center"}}>
            <img src="img/logo-alasca.png" alt="ALASCA" style={{maxWidth: "400px"}}/>
          </div>
        </div>
      </div>
    </section>
  );
}
