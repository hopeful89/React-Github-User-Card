import React from "react";
import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "50%",
    display: "flex",
    margin: "2% auto",
    background: 'rgba(200,200,225, .4)',
  },
  media: {
    height: 125,
    width: 140,
    margin: 5,
  },
});

const UserCard = ({ user }) => {
//   console.log("bs: UserCard.js: props passed", user);
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} raised children={CardMedia}>
        <CardMedia
          component="img"
          className={classes.media}
          image={user.avatar_url}
          title="avatar"
        />
        <CardContent>
          <Typography variant="h5" component="p">
            {user.login}
          </Typography>
          <Typography component="p">Name: {user.name}</Typography>
          <Typography component="p">Location: {user.location}</Typography>
          
        </CardContent>
      </Card>
    </>
  );
};

export default UserCard;
