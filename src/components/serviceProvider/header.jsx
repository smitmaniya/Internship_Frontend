import "D:/internship-project/src/css/serviceProvider/header.css"
export default function Header(){
    return(

    <header class="header">
        <div class="search-container">
            <input type="text" placeholder="Search" class="search-input"/>
        </div>
        {/* <div class="header-right">
            <div class="notification">
                <img src="notification-icon.png" alt="Notifications" class="notification-icon"/>
            </div>
            <div class="profile">
                <img src="profile-pic.png" alt="Profile" class="profile-pic"/>
                <div class="profile-info">
                    <span class="profile-name">John Doe</span>
                    <span class="profile-role">Service Provider</span>
                </div>
            </div>
        </div> */}
    </header>


    )
}