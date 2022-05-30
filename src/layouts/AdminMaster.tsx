import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
/* begin MUI */
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { authenticated, logout } from "apis/user.api";
import "assets/admin/admin-main.scss";
import { NOTIFY_NAME, PATH_NAME } from "configs";
import { useAppDispatch } from "hooks";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import auth_service from "services/authService";
import notifySlice from "slices/notifySlice";
import userSlice from "slices/userSlice";

/* end MUI */

/* function CustomLink({ to, children, ...props }: ICustomlink) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  let classN = "text-white no-underline font-semibold block w-full border-l-2 border-solid border-transparent relative";
  if (match) {
    classN += " active";
  }
  return (
    <Link to={to} {...props} className={classN}>
      {children}
    </Link>
  );
} */
/* begin MUI */
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

/* end MUI */
const AdminMaster: React.FunctionComponent = () => {
  /* begin MUI */
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  /* end MUI */
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const accessToken: string = auth_service.getAccessToken();
    if (!accessToken) {
      auth_service.clearStorage();
      return;
    }
    async function checkedAuthUser() {
      try {
        const res: any = await authenticated("/authenticated", accessToken);
        if (res && parseInt(res.status) === 200 && res.data && res.data.checked === true) {
          console.log("checkedAuthUser = ", res);
          dispatch(userSlice.actions.setUser(res.data.user));
        } else {
          auth_service.clearStorage();
          navigate(`/${PATH_NAME.ADMIN_LOGIN}`);
          return;
        }
      } catch (err: any) {
        auth_service.clearStorage();
        navigate(`/${PATH_NAME.ADMIN_LOGIN}`);
        return;
      }
    }
    checkedAuthUser();
  }, []);

  const handleLogout = async () => {
    const accessToken: string = auth_service.getAccessToken();
    const res: any = await logout("/logout", accessToken);
    let msg: Array<string> | [] = new Array(0);
    if (res && parseInt(res.status) === 200 && res.data && res.data.checked === true) {
      msg = res.data.msg;
      auth_service.clearStorage();
      dispatch(notifySlice.actions.showNotify({ type: NOTIFY_NAME.NOTI_TYPE_SUCCESS, msg }));
      navigate(`/${PATH_NAME.ADMIN_LOGIN}`);
    } else {
      msg = res.data.msg;
      dispatch(notifySlice.actions.showNotify({ type: NOTIFY_NAME.NOTI_TYPE_DANGER, msg }));
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ mr: 2, ...(open && { display: "none" }) }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Logout"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
};

export default AdminMaster;
