import {
  AppBar,
  Button,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
  Paper,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { GitHub, Instagram, Twitter } from "@material-ui/icons"
import { Link } from "gatsby"

import TodayIcon from "@material-ui/icons/Today"
import InfoIcon from "@material-ui/icons/Info"
import MenuIcon from "@material-ui/icons/Menu"

import PropTypes from "prop-types"
import React, { ReactNode } from "react"
import theme from "../../styles/theme"
import Title from "../title"

const useStyles = makeStyles({
  spacer: {
    margin: theme.spacing(1),
  },
  bottomAppbar: {
    width: "100%",
    position: "fixed",
    top: "auto",
    bottom: 0,
  },
  title: {
    marginLeft: theme.spacing(1),
    fontSize: "1.75rem",
    flexGrow: 1,
  },
  bottomText: {
    fontSize: "0.75rem",
    fontWeight: 700,
    color: theme.palette.text.secondary,
    letterSpacing: "2px",
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontWeight: 700,
  },
  iconButton: {
    color: theme.palette.text.secondary,
  },
  list: {
    color: theme.palette.text.secondary,
    width: 250,
  },
  listItemText: {
    fontWeight: 700,
  },
})

interface ListItemLinkProps {
  icon?: React.ReactElement
  primary: string
  to: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to, onClick } = props
  const classes = useStyles()

  return (
    <li>
      <ListItem button component={Link} to={to} onClick={onClick}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary={primary}
        />
      </ListItem>
    </li>
  )
}

const indexPage: React.FC<ReactNode> = ({ children }) => {
  const classes = useStyles()
  const [state, setState] = React.useState(false)

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar color="inherit" elevation={3}>
        <Toolbar>
          <Hidden smUp>
            <IconButton
              className={classes.iconButton}
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <div className={classes.title}>
            <Title />
          </div>
          <Hidden xsDown>
            <nav>
              <Button
                className={classes.button}
                size="large"
                startIcon={<TodayIcon />}
                component={Link}
                to="/blog"
              >
                Blog
              </Button>
              <Button
                className={classes.button}
                size="large"
                startIcon={<InfoIcon />}
                component={Link}
                to="/about"
              >
                About
              </Button>
            </nav>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer open={state} onClose={toggleDrawer(false)}>
        <List component="nav" className={classes.list}>
          <ListSubheader>
            <Title />
          </ListSubheader>
          <ListItemLink
            primary={"Blog"}
            to="/blog"
            icon={<TodayIcon />}
            onClick={toggleDrawer(false)}
          />
          <ListItemLink
            primary={"About"}
            to="/about"
            icon={<InfoIcon />}
            onClick={toggleDrawer(false)}
          />
        </List>
      </Drawer>
      <main>
        <Toolbar />
        {children}
        <Toolbar variant="dense" />
      </main>
      <footer className={classes.bottomAppbar}>
        <Paper elevation={3}>
          <Toolbar variant="dense">
            <Typography className={classes.bottomText}>
              <Hidden xsDown>Copyright</Hidden> &copy; 2020 <Title />
              <Hidden xsDown>
                <span className={classes.spacer}>All rights reserved.</span>
              </Hidden>
            </Typography>

            <IconButton
              aria-label="Github"
              href="https://github.com/waigo001"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </IconButton>

            <IconButton
              aria-label="Twitter"
              href="https://twitter.com/waigo001"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </IconButton>

            <IconButton
              aria-label="Instagram"
              href="https://www.instagram.com/waigo001/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </IconButton>
          </Toolbar>
        </Paper>
      </footer>
    </ThemeProvider>
  )
}

indexPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default indexPage
