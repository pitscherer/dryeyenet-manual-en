import React, { useRef, useEffect } from "react";

import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const flowSteps = [
  {
    title: "Step 1 Title",
    text: "Description for step 1.",
    imgNum: 1,
  },
  {
    title: "Step 2 Title",
    text: "Description for step 2.",
    imgNum: 2,
  },
  {
    title: "Step 3 Title",
    text: "Description for step 3.",
    imgNum: 3,
  },
  {
    title: "Step 4 Title",
    text: "Description for step 4.",
    imgNum: 4,
  },
];

export default function StfdPage() {
  return (
    <Layout title="STFD" description="Description of the STFD page">
      <main>
        <section className="container" style={{ padding: "3rem 0" }}>
          <Heading as="h1">STFD Page</Heading>
          <p>
            This is a standard Docusaurus page. You can add your content here.
          </p>
          <div className="markdown">
            {flowSteps.map((step, idx) => (
              <>
                <div key={idx}>
                  <Heading as="h2">{step.title}</Heading>
                  <p>{step.text}</p>
                </div>
                <Zoom key={idx}>
                  <img
                    src={`/img/flow/flow-${step.imgNum}.png`}
                    alt={step.title}
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      height: "auto",
                      margin: "2rem auto",
                    }}
                  />
                </Zoom>
              </>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
