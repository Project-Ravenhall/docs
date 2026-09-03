import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero-dynamic', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title mb-4">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle mb-8" style={{ fontSize: '1.2rem', fontWeight: '400', maxWidth: '800px', margin: '0 auto 2rem' }}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Getting Started/install">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  const features = [
    {
      title: 'Organize Your Collection',
      description: 'Easily structure your library by Author, Series, and Title. Ravenhall handles the rest seamlessly.'
    },
    {
      title: 'Beautiful Metadata',
      description: 'Automatically pull gorgeous covers, summaries, and metadata from Hardcover and Google Books.'
    },
    {
      title: 'Self-Hosted & Private',
      description: 'Keep full control over your library. Run it entirely locally via Docker with a simple, secure setup.'
    }
  ];

  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className="col col--4 margin-bottom--lg">
              <div className="card shadow--md padding--lg text--center" style={{ height: '100%' }}>
                <Heading as="h3">{feature.title}</Heading>
                <p className="margin-bottom--none">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="The Library of your dreams! this is a project where you can store all your books, read them with our native PDF reader and cool metadata, more to come!">
      <main>
        <HomepageHeader />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
