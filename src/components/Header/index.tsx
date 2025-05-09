import { HeaderContainer } from "./styles";
import Background from "../../assets/BackgroundHeader.svg";
import Logo from "../../assets/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <div className="background">
        <img src={Background} className="photo" />
        <div className="Logo">
          <img src={Logo} />
        </div>
      </div>
    </HeaderContainer>
  );
}
