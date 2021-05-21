import Head from 'next/head'
import Layout from '../../components/layout'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../../components/threejs'),
  { ssr: false }
)

export default function ThreeJS() {

  return (
    <Layout>
      <Head>
        <title>Three</title>
      </Head>
      <section>
        <DynamicComponentWithNoSSR />
      </section>
    </Layout>
  )
}