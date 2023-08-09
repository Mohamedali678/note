import {AiOutlinePlus} from "react-icons/ai"

import {Link} from "react-router-dom"


function Header(){

    return <div className="bg-success header text-white p-2 shadow">
        <Link to="/" className="text-white fs-1 nav-link">Nooty</Link>
        <Link to="/addnote" className="text-white btn btn-outline-warning round btn-sm fs-5 py-1 rounded-pill"> <AiOutlinePlus size="30px"/>Add Note</Link>
    </div>
}


export default Header;