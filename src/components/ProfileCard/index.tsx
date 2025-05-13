import { useEffect, useState } from "react";
import { ProfileCardContainer } from "./styles";
import { githubAPI } from "../../services/github";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface ProfileData {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  followers: number;
  html_url: string;
}

export function ProfileCard() {
  const [profile, setProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await githubAPI.get("");
      setProfile(response.data);
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <p>Carregando perfil...</p>;
  }
  return (
    <ProfileCardContainer>
      <div className="card">
        <img src={profile.avatar_url} alt={profile.name} />
        <div className="container">
          <div className="container-1">
            <h1>{profile.name}</h1>
            <a href={profile.html_url} target="_blank" rel="noreferrer">
              <button>
                <i className="fa-solid fa-arrow-up-right-from-square icon-up"></i>
                GITHUB
              </button>
            </a>
          </div>

          <div className="container-2">
            <p>{profile.bio}</p>
          </div>

          <div className="container-3">
            <button>
              <i className="fa-brands fa-github icon-git"></i>
              {profile.login}
            </button>

            <button>
              <i className="fa-solid fa-user-group icon-user"></i>
              {profile.followers} seguidores
            </button>
          </div>
        </div>
      </div>
    </ProfileCardContainer>
  );
}
