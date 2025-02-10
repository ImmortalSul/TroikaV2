"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Boxes,
  CalendarRangeIcon,
  CircleHelp,
  Computer,
  HashIcon,
  Newspaper,
  Origami,
  Rotate3D,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Icons from "../global/icons";

interface Props {
  title: string;
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  target?: string;
}

const Menu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
                            How it works
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid rounded-3xl gap-3 p-4 md:w-[400px] lg:w-[500px] xl:w-[550px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    target="_blank"
                    className="flex flex-col justify-end w-full h-full p-4 no-underline rounded-lg outline-none select-none bg-gradient-to-tr from-accent to-accent/50 focus:shadow-md"
                  >
                    <Icons.icon className="w-6 h-6" />
                    <div className="my-2 text-lg font-normal">Troika Hub</div>
                    <p className="text-sm text-muted-foreground">
                      Your hub of Powerful tools to automate workflows, scrape
                      data, and more.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <Item title="Optix" href="/" icon={<Boxes className="w-5 h-3" />}>
                Automate workflows visually
              </Item>
              <Item
                title="Scrapix"
                href="https://scrapix.troikahub.tech/"
                target="_blank"
                icon={<Origami className="w-5 h-3" />}
              >
                Intuitive visual tool for scraping data
              </Item>
              <Item
                title="RepoSnap"
                href="/"
                target="_blank"
                icon={<Computer className="w-5 h-3" />}
              >
                Summarize GitHub repos, docs, and meetings using RAG-powered
                insights.
              </Item>
              <Item
                title="Vertex"
                href="/"
                target="_blank"
                icon={<Rotate3D className="w-5 h-3" />}
              >
                Stunning 3D portfolios to showcase creativity and skills
                interactively.
              </Item>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/Developers" legacyBehavior passHref>
            <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
              Developers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/integrations" legacyBehavior passHref>
            <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
              Integrations
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] xl:w-[500px]">
              <Item
                title="Blog"
                href="/resources/blog"
                icon={<Newspaper className="w-5 h-5" />}
              >
                Read our latest articles and updates.
              </Item>
              <Item
                title="Support"
                href="/resources/support"
                icon={<CircleHelp className="w-5 h-5" />}
              >
                Get help with any issues you may have.
              </Item>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
              Docs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Item = ({ title, href, children, icon, ...props }: Props) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          passHref
          href={href}
          {...props}
          className="grid grid-cols-[.15fr_1fr] select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
        >
          <div className="flex items-center mt-1 justify-center p-1 w-8 h-8 rounded-md border border-border/80">
            {icon}
          </div>
          <div className="text-start ml-3">
            <span className="text-sm group-hover:text-foreground font-normal leading-none">
              {title}
            </span>
            <p className="text-sm mt-0.5 line-clamp-2 text-muted-foreground">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

Item.displayName = "Item";

export default Menu;
