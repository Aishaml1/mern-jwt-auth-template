import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <div>
        <h1>hello, {user ? user.name : 'friend'}</h1>

        <p>This is Angela's line of contribution</p>
      </div>
      <h1>hello, {user ? user.name : 'friend'}</h1>
    <p>HI im here</p>
    </main>

  )
}

export default Landing
