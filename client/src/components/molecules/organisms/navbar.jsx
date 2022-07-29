import {
  AppBar,
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  IconButton,
  InputBase,
  Link,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const axios = require("axios");
const settings = [
  {
    name: "プロフィール",
    url: "http://localhost:3000/profile",
  },
  {
    name: "...チャット",
    url: "#",
  },
  {
    name: "グループ",
    url: "http://localhost:3000/group",
  },
  {
    name: "...進級制作",
    url: "#",
  },
];

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

function Navbar(props) {
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(false);

  function toggleSignout() {
    axios.post("/account/signout").then(() => {
      window.location.reload();
    });
  }
  function toggleAlertOpen() {
    setOpen(true);
  }
  function toggleAlertClose() {
    setOpen(false);
  }

  function handleOpenUserMenu(e) {
    setAnchorElUser(e.currentTarget);
  }

  function handleCloseUserMenu() {
    setAnchorElUser(false);
  }

  return (
    <AppBar postion="static" color="default" sx={{ height: "58px" }}>
      <StyledToolbar>
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          href="./"
        >
          <img
            src="https://upcolor2-0-next-js.vercel.app/_next/image?url=https%3A%2F%2Fweblike-upcolor.ssl-lolipop.jp%2FUpColor%2Fincludes%2Fimages%2FUp.png&w=640&q=75"
            alt="ロゴの画像"
          />
        </IconButton>

        <Typography variant="h6" sx={{ display: { xs: "none", md: "hidden" } }}>
          Upcolor
        </Typography>
        <Search>
          <InputBase placeholder="検索" />
        </Search>
        <Icons>
          <Link sx={{ textDecoration: "none", color: "ActiveBorder" }} href="home">
            <Grid sx={{ cursor: "pointer" }}>
              <HomeIcon sx={{ ml: "8px" }} />
              <Typography
                variant="button"
                display="block"
                gutterBottom
                sx={{ display: { xs: "none", xl: "hidden" } }}
              >
                ホーム
              </Typography>
            </Grid>
          </Link>
          <Link sx={{ textDecoration: "none", color: "ActiveBorder" }} href="#">
            <Grid sx={{ cursor: "pointer" }}>
              <PeopleAltIcon sx={{ ml: "8px" }} />
              <Typography
                variant="button"
                display="block"
                gutterBottom
                sx={{ display: { xs: "none", xl: "hidden" } }}
              >
                学生
              </Typography>
            </Grid>
          </Link>
          <Link sx={{ textDecoration: "none", color: "ActiveBorder" }} href="#">
            <Grid sx={{ cursor: "pointer" }}>
              <SchoolIcon sx={{ ml: "8px" }} />
              <Typography
                variant="button"
                display="block"
                gutterBottom
                sx={{ display: { xs: "none", xl: "hidden" } }}
              >
                教室
              </Typography>
            </Grid>
          </Link>
          <Link sx={{ textDecoration: "none", color: "ActiveBorder" }} href="#">
            <Grid sx={{ cursor: "pointer" }}>
              <BusinessIcon sx={{ ml: "8px" }} />
              <Typography
                variant="button"
                display="block"
                gutterBottom
                sx={{ display: { xs: "none", xl: "hidden" } }}
              >
                企業
              </Typography>
            </Grid>
          </Link>
          <Link sx={{ textDecoration: "none", color: "ActiveBorder" }} href="#">
            <Grid sx={{ cursor: "pointer" }}>
              <NotificationsActiveIcon sx={{ ml: "8px" }} />
              <Typography
                variant="button"
                display="block"
                gutterBottom
                sx={{ display: { xs: "none", xl: "hidden" } }}
              >
                通知
              </Typography>
            </Grid>
          </Link>
        </Icons>
        <Box sx={{ flexGrow: 0 }}>
          {props.signinState ? (
            <Tooltip title="個人メニュー">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="MY ICON" src="./" />
              </IconButton>
            </Tooltip>
          ) : (
            <Link href={"signin"}>
              <Button variant="contained">サインイン</Button>
            </Link>
          )}

          <Menu
            sx={{ mt: "45px" }}
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <Link
                sx={{ textDecoration: "none", color: "ActiveBorder" }}
                key={setting["name"]}
                href={setting["url"]}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting["name"]}</Typography>
                </MenuItem>
              </Link>
            ))}
            <MenuItem onClick={toggleAlertOpen}>
              <Typography
                textAlign="center"
                sx={{
                  fontWeight: "bold",
                }}
              >
                サインアウト
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </StyledToolbar>
      {/* サインアウトアラート */}

      <Box>
        <Dialog open={Boolean(open)} onClose={toggleAlertClose}>
          <DialogTitle>本当にサインアウトしますか?</DialogTitle>

          <DialogActions>
            <Button onClick={toggleAlertClose}>キャンセル</Button>

            <Button onClick={toggleSignout} autoFocus>
              サインアウト
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </AppBar>
  );
}

export default Navbar;
