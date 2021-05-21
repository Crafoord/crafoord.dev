import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const labRoutes: [{path: string, description: string}] = [
  { path: '/labs/threejs', description: 'three.js' },
]
  

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Trying out...</p>
        {
          labRoutes.map((lab, index) => {
            return <Link key={index} href={lab.path}>
              <a>{lab.description}</a>
            </Link>
          })
        }
      </section>
    </Layout>
  )
}