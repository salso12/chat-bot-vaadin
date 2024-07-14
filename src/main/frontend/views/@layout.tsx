import {NavLink, Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <div className="p-m">
                <nav>
                    <NavLink className="btn btn-outline-info m-1" to="/">Home page</NavLink>
                    <NavLink className="btn btn-outline-info m-1" to="/chat">Chat</NavLink>
                </nav>
            </div>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
}