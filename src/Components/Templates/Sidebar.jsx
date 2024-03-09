export const Sidebar=()=>{


    return(
        <>
            <div className="iq-sidebar  sidebar-default ">
                <div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
                    <a href="../backend/index.html" className="header-logo">
                        <img src="../assets/images/logo.png" className="img-fluid rounded-normal light-logo" alt="logo"/>
                            <h4 className="logo-title ml-3">NotePlus</h4>
                    </a>
                    <div className="iq-menu-bt-sidebar">
                        <i className="las la-times wrapper-menu"></i>
                    </div>
                </div>
                <div className="sidebar-caption dropdown">
                    <a href="#" className="iq-user-toggle d-flex align-items-center justify-content-between"
                       id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="../assets/images/user/1.jpg" className="img-fluid rounded avatar-50 mr-3" alt="user" />
                            <div className="caption">
                                <h6 className="mb-0 line-height">Bud Wiser</h6>
                            </div>
                            <i className="las la-angle-down"></i>
                    </a>
                    <div className="dropdown-menu w-100 border-0 my-2" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item mb-2" href="../app/user-profile.html">
                            <i className="lar la-user-circle font-size-20 mr-1"></i>
                            <span className="mt-2">My Profile</span>
                        </a>
                        <a className="dropdown-item mb-2" href="../app/user-profile-edit.html">
                            <i className="las la-user-edit font-size-20 mr-1"></i>
                            <span>Edit Profile</span>
                        </a>
                        <a className="dropdown-item mb-2" href="../app/user-account-setting.html">
                            <i className="las la-user-cog font-size-20 mr-1"></i>
                            <span>Account Settings</span>
                        </a>
                        <a className="dropdown-item mb-3" href="../app/user-privacy-setting.html">
                            <i className="las la-user-shield font-size-20 mr-1"></i>
                            <span>Privacy Settings</span>
                        </a>
                        <hr className="my-2"/>
                            <a className="dropdown-item" href="../backend/auth-sign-in.html">
                                <i className="las la-sign-out-alt font-size-20 mr-1"></i>
                                <span>Logout</span>
                            </a>
                    </div>
                </div>
                <div className="data-scrollbar" data-scroll="1">
                    <div className="iq-search-bar device-search mb-3">
                        <form action="#" className="searchbox">
                            <a className="search-link" href="#"><i className="ri-search-line"></i></a>
                            <input type="text" className="text search-input" placeholder="Search"/>
                        </form>
                    </div>
                    <nav className="iq-sidebar-menu">
                        <ul id="iq-sidebar-toggle" className="iq-menu">
                            <li className="active">
                                <a href="#" className="svg-icon">
                                    <i>
                                        <svg className="svg-icon" id="iq-main-1" width="20"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                                        </svg>
                                    </i>
                                    <span>Your Notes</span>
                                </a>
                                <ul id="index" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                </ul>
                            </li>

                        </ul>
                    </nav>
                    <div id="sidebar-bottom" className="position-relative sidebar-bottom">
                        <div className="card rounded shadow-none">
                            <div className="card-body">
                                <div className="sidebarbottom-content">
                                    <div className="image">
                                        <img src="./assets/images/layouts/side-bkg.png"
                                                                className="img-fluid" alt="side-bkg"/></div>
                                    <p className="mb-0">Set Buisness Account To Explore Premiun Features</p>
                                    <button type="button" className="btn bg-primary mt-3">Upgrade</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3"></div>
                </div>
            </div>
        </>
    )
}