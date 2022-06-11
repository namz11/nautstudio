import { Routes } from "@models/enums/routes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";

function Navbar({ selectedRoute }: any) {
  const router = useRouter();
  const routes = Routes;

  const [menu, setMenu] = useState([] as any);
  const [subMenu, setSubMenu] = useState([] as any);

  const navigateToRoute = (route: string) => {
    router.push(`${route}`);
  };

  const getClassName = (route: string) => {
    const path = selectedRoute || "";
    if (path !== "/") {
      return path.includes(route) ? styles.navItemSelected : styles.navItem;
    }
    return styles.navItemSelected;
  };

  const setupNavItems = (items: any) => {
    const path = selectedRoute;
    if (path !== "/") {
      const pathArray = path.split("/").filter((x: string) => x?.length > 0);
      const level = pathArray.length;
      items.some((route: any) => {
        if (level === 1) {
          if (route.route === path) {
            setMenu(route?.items || []);
            return true;
          }
        } else if (level === 2) {
          if (path.includes(route.route)) {
            setMenu(route?.items || []);
            return route?.items.some((rt: any) => {
              if (rt.route === path) {
                setSubMenu(rt?.items || []);
                return true;
              }
              return false;
            });
          }
        } else if (level === 3) {
          if (path.includes(route.route)) {
            setMenu(route?.items || []);
            return route?.items.some((rt: any) => {
              if (path.includes(rt.route)) {
                setSubMenu(rt?.items || []);
                return true;
              }
              return false;
            });
          }
        }
        return false;
      });
    }
  };
  useEffect(() => {
    setupNavItems(routes);
  }, [selectedRoute, routes]);

  return (
    <>
      <header className="header">
        <div className={styles.headerContent}>
          <div
            className={styles.logoWrapper}
            onClick={() => navigateToRoute("/")}
          >
            नौत स्टूडियो <br />
            naut studio
          </div>
          <nav>
            {routes &&
              routes.map((route) => (
                <div
                  key={route.route}
                  onClick={() => navigateToRoute(route.route)}
                  className={getClassName(route.route)}
                >
                  {route.name}
                </div>
              ))}
          </nav>
          <nav>
            {menu &&
              menu.map((route: any) => (
                <div
                  key={route.route}
                  onClick={() => navigateToRoute(route.route)}
                  className={getClassName(route.route)}
                >
                  {route.name}
                </div>
              ))}
          </nav>
          <nav>
            {subMenu &&
              subMenu.map((route: any) => (
                <div
                  key={route.route}
                  onClick={() => navigateToRoute(route.route)}
                  className={getClassName(route.route)}
                >
                  {route.name}
                </div>
              ))}
          </nav>
        </div>
      </header>

      <header className="header-mobile">
        <div className={styles.headerContentMobile}>
          <div
            className={styles.logoWrapper}
            onClick={() => navigateToRoute("/")}
          >
            नौत स्टूडियो <br />
            naut studio
          </div>

          <div className={styles.menu}>
            <nav>
              {routes &&
                routes.map((route) => (
                  <div
                    key={route.route}
                    onClick={() => navigateToRoute(route.route)}
                    className={getClassName(route.route)}
                  >
                    {route.name}
                  </div>
                ))}
            </nav>
            <nav>
              {menu &&
                menu.map((route: any) => (
                  <div
                    key={route.route}
                    onClick={() => navigateToRoute(route.route)}
                    className={getClassName(route.route)}
                  >
                    {route.name}
                  </div>
                ))}
            </nav>
            <nav>
              {subMenu &&
                subMenu.map((route: any) => (
                  <div
                    key={route.route}
                    onClick={() => navigateToRoute(route.route)}
                    className={getClassName(route.route)}
                  >
                    {route.name}
                  </div>
                ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
