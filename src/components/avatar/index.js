import React from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  }
}));

const SmallAvatar = withStyles(theme => ({
  root: {
    width: 50,
    height: 50,
    border: `2px solid #262332`
  }
}))(Avatar);

export default function BadgeAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        badgeContent={
          <SmallAvatar
            alt="Remy Sharp"
            src="https://api.adorable.io/avatars/250/random31.png"
          />
        }
      >
        <Avatar
          alt="Travis Howard"
          src="https://api.adorable.io/avatars/250/random17.png"
          className={classes.large}
        />
      </Badge>
    </div>
  );
}
