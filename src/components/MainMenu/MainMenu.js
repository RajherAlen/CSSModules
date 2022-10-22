import React from "react";
import menu from "./MainMenu.module.css";
import Link from "next/Link";
import menuItems from "./menuStore";
import { useRouter } from "next/router";

const MainMenu = () => {
    return (
        <div className={menu.main}>
            {menuItems.map((item) => (
                <React.Fragment key={item.id}>
                    <MenuItem title={item.title} path={item.path} />
                </React.Fragment>
            ))}
        </div>
    );
};

export default MainMenu;

const MenuItem = ({ title, path }) => {
    const router = useRouter();

    return (
        <div
            className={`${menu.item} ${
                router.pathname == path ? menu.isActive : ""
            }`}
        >
            <Link href={path}>
                <a className={menu.link}>{title}</a>
            </Link>
        </div>
    );
};
