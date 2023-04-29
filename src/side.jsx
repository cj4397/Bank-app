
import './styles/side_style.css'

function Aside() {
    return (
        <>
            <aside className="menu">
                <div className="sidenav-header">
                    <img className="bank_icon" src="/src/assets/png/012-bank.png" alt="" />
                    <span className="ms-1 font-weight-bold text-white">Material Dashboard 2</span>
                </div>

                <hr />

                <ul className="menu-list">
                    <li><a>
                        <img className='icon' src="/src/assets/png/011-dashboard.png" alt="" />
                        <span className="nav-link-text ms-1">Dashboard</span></a></li>

                </ul>

                <hr />

                <ul className="menu-list">
                    <li><a>
                        <img className='icon' src="/src/assets/png/013-bill.png" alt="" />
                        <span className="nav-link-text ms-1">Billing</span>
                    </a></li>
                    <li>
                        <a>
                            <img className='icon' src="/src/assets/png/014-notification.png" alt="" />
                            <span className="nav-link-text ms-1">Notifications</span>
                        </a></li>
                    <li><a>
                        <img className='icon' src="/src/assets/png/015-user.png" alt="" />
                        <span className="nav-link-text ms-1">Profile</span></a></li>
                    <li><a>
                        <img className='icon' src="/src/assets/png/016-logout.png" alt="" />
                        <span className="nav-link-text ms-1">Sign Out</span>
                    </a></li>

                </ul>

                <ul className="menu-list">
                    <li><a>
                        <img className='icon' src="/src/assets/png/019-upgrade.png" alt="" />
                        <span className="nav-link-text ms-1">Upgrade to pro</span>
                    </a></li>
                </ul>


            </aside >




        </>
    )
}
export default Aside