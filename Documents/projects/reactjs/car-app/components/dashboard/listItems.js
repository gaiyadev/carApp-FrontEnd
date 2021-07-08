import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import LocalActivity from "@material-ui/icons//LocalActivity";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Link from "next/link";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link href="/dashboard/">
        <a>
          <ListItemText primary="Dashboard" />
        </a>
      </Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link href="/dashboard/symptoms">
        <a>
          <ListItemText primary="Symptoms" />
        </a>
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link href="/dashboard/users">
        <a>
          <ListItemText primary="Users" />
        </a>
      </Link>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Settings</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <LocalActivity />
      </ListItemIcon>
      <Link href="/dashboard/changePassword">
        <a>
          <ListItemText primary="Change Password" />
        </a>
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link href="/dashboard/updateProfile">
        <a>
          <ListItemText primary="Update Profile" />
        </a>
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="SignOut" />
    </ListItem>
  </div>
);
