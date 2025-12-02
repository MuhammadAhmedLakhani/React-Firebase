import { Outlet } from "react-router-dom";
import LayoutApp from "../components/Layout";

function Profile() {
    return (
        <div>
            <LayoutApp>
                <h1>Profile Page</h1>
                <Outlet/>
            </LayoutApp>

        </div>
    )
}

export default Profile;