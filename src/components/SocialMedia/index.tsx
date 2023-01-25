import * as C from "./styles";
import { ReactComponent as LinkedinLogo } from "../../assets/logo-linkedin.svg";
import { ReactComponent as GithubLogo } from "../../assets/logo-github.svg";
import { ReactComponent as TelegramLogo } from "../../assets/logo-telegram.svg";

export const SocialMedia = () => {
  return (
    <C.Container>
      <li>
        <C.Link href="linkedin.com">
          <LinkedinLogo />
        </C.Link>
      </li>
      <li>
        <C.Link href="github.com">
          <GithubLogo />
        </C.Link>
      </li>
      <li>
        <C.Link href="google.com">
          <TelegramLogo />
        </C.Link>
      </li>
    </C.Container>
  );
};
