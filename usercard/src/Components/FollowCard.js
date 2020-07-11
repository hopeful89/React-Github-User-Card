import React from "react";
import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    margin: "2% 1%",
    background: "rgba(50,125,210, .5)",
  },
  media: {
    height: 125,
    width: 140,
    margin: 5,
  },
});

const FollowCard = ({ follower }) => {
  // console.log('bs: FollowCard.js: props from app', follower)
  const classes = useStyles();
  return (
    <>
      <Grid item lg={4}>
        <Card className={classes.root} raised children={CardMedia}>
          <CardMedia
            component="img"
            className={classes.media}
            image={follower.avatar_url}
            title="avatar"
          />
          <CardContent>
            <Typography variant="h6">{follower.login}</Typography>
            <Typography component="p"></Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default FollowCard;
