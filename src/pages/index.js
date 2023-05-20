import Head from 'next/head'
import LoginForm from './components_login/loginform'
import styles from './styles/Login.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Burger Queen</title>
      <meta name="login/home" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/burgericon.png" />
    </Head>
    <header style={{display: 'flex', alignItems: 'center'}}>
      <img src='/bq-logo.jpg' className={styles.logoBq} />
        <h1 className= {styles.bqTitle}>BURGER <span className={styles.queen} >QUEEN</span></h1>
    </header>
      <main className={styles.login_container} >
        <LoginForm/>
        <img src='/burgerLogin.png' className={styles.loginburger} />
      </main>
      
    </>
  )
}
