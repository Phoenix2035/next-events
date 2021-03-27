import Link from "next/link";
import classes from "../../styles/main-header.module.css";

function MainHeader(props) {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href="/">NextEvents</Link>
            </div>

            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href="/events">
                            Browse All Events
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;