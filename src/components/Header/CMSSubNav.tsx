import React from "react"
import { ChevronDown, ChevronUp } from "react-feather"
import helpers from "../../styles/helpers.module.css"
import styles from "./header.module.css"

type CMSSubNavProps = {
  name: string
  nameShort: string
  items: Array<itemsType>
  id: number
  title: string
  open: boolean
  page: boolean
  openTrigger: (id: number) => Function
}

type itemsType = {
  id: number
  title: string
  path: string
}

export const CMSSubNav = ({
  name,
  nameShort,
  items,
  id,
  open,
  page,
  openTrigger,
}: CMSSubNavProps) => {
  return (
    <li
      className={`relative ${styles.headerNavigationLinkItem} ${
        page ? `afterBorder` : ``
      }`}
      tabIndex={0}
      key={`navigation-item-${id}`}
      data-testid="subLinkMenu"
      data-cy={`subLinkMenu-${name}`}
      onClick={e => {
        if (open) {
          openTrigger(0)
        } else {
          e.stopPropagation()
          openTrigger(id)
        }
      }}
    >
      <span className="flex items-center">
        {nameShort ? (
          <>
            <span className="xl:hidden">{nameShort}</span>
            <span className="hidden xl:block">{name}</span>
          </>
        ) : (
          <span>{name}</span>
        )}
        {open ? (
          <ChevronUp className="ml-1 mt-2px" size="16" />
        ) : (
          <ChevronDown className="ml-1 mt-2px" size="16" />
        )}
      </span>

      <div
        onClick={e => e.stopPropagation()}
        className={`${
          open ? "block pointer-events-none absolute top-4" : "hidden"
        }
        ${helpers.cmsContainer}
        `}
      >
        <div className="px-10 py-12 text-black bg-white cursor-default pointer-events-auto">
          <ul
            className={`grid grid-flow-col grid-rows-${items.length / 2} gap-4`}
          >
            {items.map(({ id, title, path }) => (
              <li className="" key={`CMSSubNavItem-${id}`}>
                <a className="capitalize" href={path}>
                  <div className="font-bold displaySM">{title}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}
