import { BsTwitch, BsInstagram, BsTwitter } from 'react-icons/bs'

const style = { color: 'white', fontSize: '20px', marginLeft: '10px' }

function Footer() {
  return (
    <footer>
      <a href="https://www.twitch.tv/solivann78" target="_blank" rel="noreferrer">
        <BsTwitch style={style} />
      </a>
      <a href="https://www.instagram.com/solivann78" target="_blank" rel="noreferrer">
        <BsInstagram style={style} />
      </a>
      <a href="https://twitter.com/solivann78" target="_blank" rel="noreferrer">
        <BsTwitter style={style} />
      </a>
    </footer>
  )
}

export default Footer
