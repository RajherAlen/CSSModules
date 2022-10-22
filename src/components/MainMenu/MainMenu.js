import React, { useState } from "react";
import menu from "./MainMenu.module.css";
import Link from "next/Link";
import menuItems from "./menuStore";
import { useRouter } from "next/router";
import { Button } from "components";

const MainMenu = () => {
    const [isCollapsed, setisCollapsed] = useState(false);

    const handleMenu = () => {
        setisCollapsed(!isCollapsed);
    };
    console.log(isCollapsed);
    return (
        <div className={`${menu.main} ${isCollapsed ? menu.isCollapsed : ""}`}>
            {menuItems.map((item) => (
                <React.Fragment key={item.id}>
                    <MenuItem
                        title={item.title}
                        path={item.path}
                        isCollapsed={isCollapsed}
                    />
                </React.Fragment>
            ))}

            <div className={menu.link}>
                <Button value={isCollapsed ? "C" : "Collapsed"} type={"primary"} action={handleMenu} />
            </div>
        </div>
    );
};

export default MainMenu;

const MenuItem = ({ title, path, isCollapsed }) => {
    const router = useRouter();

    const icon = <i>{title[0]}</i>;

    return (
        <div
            className={`${menu.item} ${
                router.pathname == path ? menu.isActive : ""
            }`}
        >
            <Link href={path}>
                <a className={menu.link}>{isCollapsed ? icon : title}</a>
            </Link>
        </div>
    );
};
