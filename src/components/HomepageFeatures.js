import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [{
        title: 'Easy and fast to download and install',
        description: (
        <>
            The games offered by the Puremoon download station can be downloaded with a single click, which is convenient and easy.
            At the same time, Puremoon has deployed several nodes around the world, which can provide you with high-quality download services.
        </>
        ),
    },
    {
        title: 'Charity projects',
        description: (
        <>
            Puremoon Download Station is a <b>public welfare</b> project of interest and is not intended for profit.
            Providing more and convenient resource sharing for rhythm game players is Puremoon's goal and creed.
        </>
        ),
    },
    {
        title: 'A project that everyone realized together',
        description: (
        <>
            The healthy development of Puremoon Download Station is inseparable from the strong support of all players.
            We hope that through this project, we can provide some convenience for some players who are inconvenient to download resources, and benefit the whole player community.
        </>
        ),
    },
    {
        title: 'No personal data is collected',
        description: (
        <>
            Puremoon Network has always believed that a pure and secure internet environment requires our collective efforts to maintain.
            Therefore, Puremoon firmly opposes the unscrupulous practices of certain companies that arbitrarily obtain user information and profit from it. Puremoon has not, and will not, collect users' private information in any way.
        </>
        ),
    },
];

function Feature({title, description}) {
    return (
      <div className={clsx('col col--4')}>
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
