import styles from './Landing.module.css'
import YoutubeEmbed from "../../YoutubeEmbed"

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Hello, {user ? user.name : 'friend'}</h1>
      <div className="App">
        <h1>Mental Health Checkup Song</h1>
        <YoutubeEmbed embedId="rokGy0huYEA" />
      </div>
    </main>
  )
}

export default Landing
