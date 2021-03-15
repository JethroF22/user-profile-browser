import Head from 'next/head'
import UserGrid from '../components/UserGrid'

export default function Home({ users }) {
  return (
    <div>
      <Head>
        <title>User Profile Browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserGrid users={users}/>
    </div>
  )
}

export async function getStaticProps(context){
  const response = await fetch('https://randomuser.me/api/?results=50');
  const users = (await response.json()).results;

  return {
      props: {
          users
      }
  }
}
