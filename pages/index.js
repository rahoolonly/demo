import Head from "next/head";
import CardList from "@/components/Card-List";
import style from '../styles/Home.module.css'
import Link from "next/link";

export default function Home({ data, page }) {

  return (
    <>
      <Head>
        <title>Top Home Loans</title>
        <meta content="This is a home loan websies. you can find best loan companies, here !" />
      </Head>

      <main className={style.main}>
        <h1>Top Home Loans Products</h1>
        <div id={style.row}>
          {data.hits.map((res, index) => {
            return (
              <div className={style.cardMarginAndPadding} key={index}>
                < CardList res={res} />
              </div>)
          })}
        </div>

        <div className="buttons">
          <Link className={style.link} href={`/`}>1</Link>
          {page < 2 && <Link className={style.link} href={`/?page=${page + 1}`}>2</Link>}
        </div> 
         </main>

    </>
  )
}


export async function getServerSideProps({ query }) {

  const page = Number(query.page) || 1;

  const res = await fetch(`https://api.ratecity.com.au/v2/home-loans?page=${page}`, {
    headers: {
      'x-api-key': process.env.KEY
    }
  })

  const data = await res.json()
  return { props: { data, page } };
}
