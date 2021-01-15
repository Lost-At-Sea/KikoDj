import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SoundCloudWidget from "../components/Soundcloud"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Hola to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>This is a test</p>
    <SoundCloudWidget />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      {/* test teste teste testes testicles */}
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
