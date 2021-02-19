import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const labs: string[] = [
  `MAKE SOMETHING`,
  `DO SOMETHING`
]
  

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi! I'm <b>Magnus</b> and I love to code, eat and sleep!
        </p>
        {
          labs.map(lab => {
            return <p>{lab}</p>
          })
        }
      </section>
    </Layout>
  )
}