import {AiOutlinePlus} from "react-icons/ai"

import {Link} from "react-router-dom"


function Header(){

    return <div className="bg-success header text-white p-2">
        <Link to="/" className="text-white fs-1 nav-link">Nooty</Link>
        <Link to="/addnote" className="text-white"> <AiOutlinePlus size="4em"/></Link>
    </div>
}


export default Header;