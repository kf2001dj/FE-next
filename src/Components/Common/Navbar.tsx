import Link from "next/link";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/shop"}>Shop</Link></li>
                <li><Link href={"/blog"}>Dev</Link></li>
                <li><Link href={"/contact"}>About</Link></li>
            </ul>
        </nav>

    )
}
export default Navbar;