import Link from "next/link";

import { SOCAIL_LINKS } from "../utils/Constants";
import "../styles/navbar.scss";

const Navbar = () => (
    <nav className="navbar navbar-expand-sm">
        <Link href="/">
            <a className="navbar-brand">
                {/* <h1>{APP_NAME}</h1> */}
                <img src="/images/chat-logo1.png" />
            </a>
        </Link>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span>
                <i className="fa fa-bars" aria-hidden="true" />
            </span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
            <div className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a
                        className="nav-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={SOCAIL_LINKS.github}>
                        Github
                    </a>
                </li>
            </div>
        </div>
    </nav>
);

export default Navbar;
