import { UserInfoComponent } from '../UserInfoComponent/UserInfoComponent';
import './ProfileComponent.css';

export const ProfileComponent = ({avatar, info}) => {
    return(
        <div className="profile-card-wrapper">
            <div className="profile-image-wrapper">
                <img src={avatar} alt="Foto de perfil" />
            </div>
            {info}
        </div>
    );
}