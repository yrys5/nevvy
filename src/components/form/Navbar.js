import React from "react";
import logo from "../../assets/nevvy-logo.png";
import LogoutButtton from "../../components/ui/LogoutButtton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Link } from "react-router-dom";
import { Avatar, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

//TEST
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  height: "25px",
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0, 0, 0, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    height: "25px",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Navbar = () => {
  const user = useSelector((state) => state?.user.currentUser);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="navbar-wrapper">
      <div className="navbar-left">
        <Link to={"/"}>
          <img src={logo} height="40px"></img>
        </Link>
      </div>
      <div className="navbar-right">
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Wyszukaj.."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        {/* <Link
              to={"/add-new"}
              style={{ textDecoration: "none", color: "black", height: "24px" }}
              >
              <PostAddIcon></PostAddIcon>
            </Link>

        <Link
          to={"/user-account"}
          style={{ textDecoration: "none", color: "white", height: "24px" }}
        >
          <Avatar sx={{ width: 24, height: 24, fontSize: "small" }}>
            {user?.username.slice(0, 2).toUpperCase()}
          </Avatar>
        </Link>
        <LogoutButtton></LogoutButtton> */}

        <React.Fragment>
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Tooltip title="Ustawienia konta">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 26, height: 26, fontSize: "small" }}>
                  {user?.username.slice(0, 2).toUpperCase()}
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem disabled>
              <Avatar /> Profil
            </MenuItem>
            <Link to="/user-account">
              <MenuItem>
                <Avatar /> Moje konto
              </MenuItem>
            </Link>
            <Divider />
            <Link to="/add-new">
              <MenuItem>
                <ListItemIcon>
                  <PostAddIcon fontSize="small" />
                </ListItemIcon>
                Dodaj nowy post
              </MenuItem>
            </Link>
            <MenuItem disabled>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Ustawienia
            </MenuItem>
            <MenuItem>
              <LogoutButtton></LogoutButtton>
            </MenuItem>
          </Menu>
        </React.Fragment>
      </div>
    </section>
  );
};

export default Navbar;
