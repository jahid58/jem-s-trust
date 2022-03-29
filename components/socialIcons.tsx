import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterIcon,
  TwitterShareButton,
} from 'next-share'
const SocialIcons = () => {
  return (
    <div className=" mx-2 flex space-x-3">
      <FacebookShareButton url="/">
        <FacebookIcon size={34} round />
      </FacebookShareButton>
      <TwitterShareButton url="/">
        <TwitterIcon size={34} round />
      </TwitterShareButton>

      <WhatsappShareButton url={''}>
        <WhatsappIcon size={34} round />
      </WhatsappShareButton>
    </div>
  )
}

export default SocialIcons
