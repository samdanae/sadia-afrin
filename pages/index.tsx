import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sadia Afrin</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='object'>
        <div className='object-rope'></div>
        <div className='object-shape'>
          Coming <span className='soon'>Soon</span>
        </div>
      </div>
      <div className='content'>
        <p className='message'>
          Our brand new website will be launching in at the end of January.
        </p>
      </div>
    </div>
  );
};

export default Home;
