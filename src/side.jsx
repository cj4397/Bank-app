
import './styles/side_style.css'

function Aside() {
    return (
        <>
            <aside className="is-justify-content-start pl-5 " id="sidenav-main">

                <div className="sidenav-header">
                    <img className="bank_icon" src="/src/assets/png/012-bank.png" alt="" />
                    <span className="ms-1 font-weight-bold text-white">Material Dashboard 2</span>
                </div>


                <hr className="horizontal light mt-0 mb-2" />

                <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white " href="./dashboard.html">
                                <img className='icon' src="/src/assets/png/011-dashboard.png" alt="" />
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white " href="./billing.html">
                                <img className='icon' src="/src/assets/png/013-bill.png" alt="" />
                                <span className="nav-link-text ms-1">Billing</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white " href="./notifications.html">
                                <img className='icon' src="/src/assets/png/014-notification.png" alt="" />
                                <span className="nav-link-text ms-1">Notifications</span>
                            </a>
                        </li>
                        <li className="nav-item mt-3">
                            <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white " href="./profile.html">
                                <img className='icon' src="/src/assets/png/015-user.png" alt="" />
                                <span className="nav-link-text ms-1">Profile</span>
                            </a>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link text-white " href="./sign-in.html">
                                <img className='icon' src="/src/assets/png/016-logout.png" alt="" />
                                <span className="nav-link-text ms-1">Sign Out</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="sidenav-footer position-absolute w-100 bottom-0 ">
                    <div className="">
                        <a className="btn bg-gradient-primary mt-4 w-100" href="" type="button">
                            <img className='icon' src="/src/assets/png/019-upgrade.png" alt="" />
                            <span className="nav-link-text ms-1">Upgrade to pro</span> </a>
                    </div>

                </div>

            </aside>
        </>
    )
}
export default Aside