import { ProfileCardContainer } from "./styles";
import Avatar from "../../assets/Avatar.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <div className="card">
        <img src={Avatar} />
        <div className="container">
          <div className="container-1">
            <h1>Cameron Williamson</h1>
            <button>
              <i className="fa-solid fa-arrow-up-right-from-square icon-up"></i>
              GITHUB
            </button>
          </div>

          <div className="container-2">
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
          </div>

          <div className="container-3">
            <button>
              <i className="fa-brands fa-github icon-git"></i>
              cameronwll
            </button>

            <button>
              <i className="fa-solid fa-user-group icon-user"></i>
              32 seguidores
            </button>
          </div>
        </div>
      </div>
    </ProfileCardContainer>
  );
}
