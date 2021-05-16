import PropTypes from "prop-types"
import React, { ReactNode } from "react"
import Title from "../title"

const indexPage: React.FC<ReactNode> = ({ children }) => {
  return (
    <>
      <header>
        <h2>
          <Title />
        </h2>
      </header>
      <main>{children}</main>
      <footer>
        <div>
          <div>
            <a
              aria-label="Github"
              href="https://github.com/waigo001"
              target="_blank"
              rel="noreferrer"
            />
          </div>
          <div>
            <a
              aria-label="Twitter"
              href="https://twitter.com/waigo001"
              target="_blank"
              rel="noreferrer"
            />
          </div>
          <div>
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/waigo001/"
              target="_blank"
              rel="noreferrer"
            />
          </div>
        </div>
        <div>
          Copyright &copy; 2020 <Title />
        </div>
        <div>All rights reserved.</div>
      </footer>
    </>
  )
}
indexPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default indexPage
