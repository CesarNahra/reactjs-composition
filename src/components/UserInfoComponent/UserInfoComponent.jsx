import './UserInfoComponent.css';

export const UserInfoComponent = ({user}) => {
    return(
        <div className="profile-info-wrapper">
            <div className="info-wrapper">
                <p className="name-wrapper">{user.name}</p>
                <p className="role-wrapper">{user.role}</p>
            </div>
            <div className="contact-wrapper">
                <p className="email-wrapper">{user.email}</p>
                <p className="phone-wrapper">{user.phone}</p>
            </div>
        </div>
    );
}