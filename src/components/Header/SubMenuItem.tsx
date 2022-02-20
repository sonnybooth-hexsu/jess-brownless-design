import React from "react"
import { Link } from "gatsby"
import { ChevronDown, ChevronUp } from "react-feather"
import styles from "./header.module.css"

type SubMenuItemProps = {
  name: string
  id: number
  subLinks: Array<{ name: string; page: string; id: number }>
  open: boolean
  openTrigger: (id: number) => Function
}

export const SubMenuItem = ({
  name,
  subLinks,
  id,
  open,
  openTrigger,
}: SubMenuItemProps) => {
  return (
    <li
      tabIndex={0}
      key={`navigation-item-${id}`}
      data-testid="subLinkMenu"
      onClick={e => {
        if (open) {
          openTrigger(0)
        } else {
          e.stopPropagation()
          openTrigger(id)
        }
      }}
    >
      <span className={styles.headerNavigationSubMenu}>
        {name}
        {open ? <ChevronUp size="16" /> : <ChevronDown size="16" />}
      </span>

      <div
        data-testid="subLinkMenuList"
        className={`${open ? "block" : "hidden"}`}
      >
        <div className="container grid grid-cols-3 gap-6 mx-auto">
          {subLinks &&
            subLinks.map(({ name, page, id }) => (
              <Link key={`navigation-sublink-item-${id}`} to={page}>
                {name}
              </Link>
            ))}
        </div>
      </div>
    </li>
  )
}
