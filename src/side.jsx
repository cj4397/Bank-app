import { Link } from "react-router-dom";


import './styles/side_style.css'




function Aside() {

    function sign_out() {
        console.log('user info must be deleted')

    }

    return (
        <>
            <aside className="menu">
                <div className="sidenav-header">
                    <img className="bank_icon" src="/src/assets/png/012-bank.png" alt="" />
                    <span className="ms-1 font-weight-bold text-white">Material Dashboard 2</span>
                </div>

                <hr />

                <ul className="menu-list">
                    <li>
                        <Link to={`Main/Dashboard`}>
                            <img className='icon' src="/src/assets/png/011-dashboard.png" alt="" />
                            <span className="nav-link-text ms-1">Dashboard</span>
                        </Link>
                    </li>

                </ul>

                <hr />

                <ul className="menu-list">
                    <li>
                        <Link to={`Main/Billing`}>
                            <img className='icon' src="/src/assets/png/013-bill.png" alt="" />
                            <span className="nav-link-text ms-1">Billing</span>
                        </Link></li>
                    <li>
                        <Link to={`Main/Notifications`}>
                            <img className='icon' src="/src/assets/png/014-notification.png" alt="" />
                            <span className="nav-link-text ms-1">Notifications</span>
                        </Link></li>
                    <li>
                        <Link to={`Main/Profile`}>
                            <img className='icon' src="/src/assets/png/015-user.png" alt="" />
                            <span className="nav-link-text ms-1">Profile</span>
                        </Link></li>
                    <li>
                        <Link to={`/`} onClick={sign_out} >
                            <img className='icon' src="/src/assets/png/016-logout.png" alt="" />
                            <span className="nav-link-text ms-1">Sign Out</span>
                        </Link>
                    </li>

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