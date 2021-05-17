import { Link } from "gatsby"

import React, { ReactNode } from "react"
import Title from "../title"

interface ListItemLinkProps {
  icon?: React.ReactElement
  primary: string
  to: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to, onClick } = props

  return (
    <li>
      <Link to={to} onClick={onClick}>
        {icon ? <div>{icon}</div> : null}
        <span>{primary}</span>
      </Link>
    </li>
  )
}

const indexPage: React.FC<ReactNode> = ({ children }) => {
  const [state, setState] = React.useState(false)

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }
      setState(open)
    }

  return (
    <>
      <div>
        <button aria-label="open drawer" onClick={toggleDrawer(true)}></button>
        <Title />
      </div>
      <div>
        <li>
          <Title />
          <ListItemLink
            primary={"Blog"}
            to="/blog"
            onClick={toggleDrawer(false)}
          />
          <ListItemLink
            primary={"About"}
            to="/about"
            onClick={toggleDrawer(false)}
          />
        </li>
      </div>
      <main>{children}</main>
      <footer>
        <div>
          <h6>
            Copyright &copy; 2020 <span>All rights reserved.</span>
          </h6>

          <a
            aria-label="Github"
            href="https://github.com/waigo001"
            target="_blank"
            rel="noreferrer"
          ></a>

          <a
            aria-label="Twitter"
            href="https://twitter.com/waigo001"
            target="_blank"
            rel="noreferrer"
          ></a>

          <a
            aria-label="Instagram"
            href="https://www.instagram.com/waigo001/"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
      </footer>
    </>
  )
}

export default indexPage
