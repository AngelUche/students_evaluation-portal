import { useNavigate } from "react-router-dom";

function LogOutModal() {
    const navigate = useNavigate();

    function handleLogOut() {
        navigate("/login");
    }

    return (
        <>
            <p>Log out Modal UI</p>
            <button onClick={handleLogOut} >LogOut</button>       
        </>
    )
}


export { LogOutModal }