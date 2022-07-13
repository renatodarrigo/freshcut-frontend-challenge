import Feed from './components/feed/feed';
import Header from './components/header/header';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles['page']}>
      <div className={styles['wrapper']}>
        <div className={styles['container']}>
          <Header
            creatorName="CreatorName"
            // backgroundUrl="https://placekitten.com/1336/288"
            avatarUrl="https://placekitten.com/240/240"
            isVerified={true}
            isFollowed={true}
            description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit magna."
            followers={100}
            views={2000}
            likes={30000}
            discordUrl="a"
            twitchUrl="a"
            youtubeUrl="a"
            instagramUrl="a"
          />
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default App;
