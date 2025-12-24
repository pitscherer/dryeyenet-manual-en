import type { ReactNode } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <div className={styles.hero_syme} data-theme="dark">
      <div className={styles.heroInner_VWeJ}>
        <div className={styles.heroContentRow}>
          <div className={styles.heroTextCol}>
            <h1 className={styles.heroProjectTagline_EkV5}>
              <span className={styles.heroTitleTextHtml_zYwv}>
                Build <b>optimized</b> websites <b>quickly</b>, focus on your{" "}
                <b>content</b>
              </span>
            </h1>
            <div className={styles.indexCtas_hUA_}>
              <a className="button button--primary" href="/docs">
                Get Started
              </a>
              <a
                href="https://docusaurus.new"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--info"
              >
                Try a Demo
              </a>
              <span className={styles.indexCtasGitHubButtonWrapper_AOht}>
                <iframe
                  className={styles.indexCtasGitHubButton_sMIS}
                  src="https://ghbtns.com/github-btn.html?user=facebook&amp;repo=docusaurus&amp;type=star&amp;count=true&amp;size=large"
                  width="160"
                  height="30"
                  title="GitHub Stars"
                ></iframe>
              </span>
            </div>
          </div>
          <div className={styles.heroImageCol}>
            <img
              alt="Docusaurus with Keytar"
              className={styles.heroLogo_jM6J}
              width="500"
              src="/img/homeImage.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="DryEyeNet Documentation"
      description="Official documentation for DryEyeNet"
    >
      <HomepageHeader />
      <main>
        <section
          className={clsx("container", styles.section)}
          style={{ padding: "3rem 0" }}
        >
          <Heading as="h2">Welcome to the DryEyeNet Manual</Heading>
          <p>
            This manual provides comprehensive guidance for using the DryEyeNet
            platform, including staff and patient workflows, system features,
            and best practices for daily operations.
          </p>
          <p>
            Use the navigation menu on the left to access detailed sections on
            setup, workflows, and troubleshooting.
          </p>
          <Heading as="h3">Support</Heading>
          <p>
            For questions or technical support, please contact: <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:support@smartdryeyes.com">
              support@smartdryeyes.com
            </a>
          </p>
        </section>
      </main>
    </Layout>
  );
}
