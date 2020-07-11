import React, { Component } from "react";
import UserCard from "./Components/UserCard";
import FollowCard from "./Components/FollowCard";
import { TextField, Grid, Container } from "@material-ui/core";

class App extends Component {
  state = {
    searched: "hopeful89",
    userSearch: "",
    followers: [],
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.searched}`)
      .then((res) => res.json())
      .then((user) => this.setState(user))
      .catch((err) => console.log(err));

    fetch(`https://api.github.com/users/${this.state.searched}/followers`)
      .then((res) => res.json())
      .then((user) => this.setState({ followers: user }))
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.login.toLowerCase() !== this.state.searched.toLowerCase()) {
      console.log('testing state', 'aftersearch')
      fetch(`https://api.github.com/users/${this.state.searched}`)
      .then((res) => res.json())
      .then((user) => this.setState(user))                                          
      .catch((err) => console.log(err));

      fetch(`https://api.github.com/users/${this.state.searched}/followers`)
      .then((res) => res.json())
      .then((user) => this.setState({ followers: user }))
      .catch((err) => console.log(err));
    }
  }

  handleChange(e) {
    this.setState({ userSearch: e.target.value });
  }

  handleUserSubmit(e) {
    e.preventDefault()
    this.setState({ searched: this.state.userSearch });
    this.setState({ userSearch: ''})
  }

  render() {
    return (
      <Container component='div' style={{ backgroundColor: '#cfe8fc', height: '100vh', maxWidth: '100vw'}}>
        <form onSubmit={(e) => this.handleUserSubmit(e)} style={{ display: "flex", flexDirection: 'column', margin: "0 auto", width: "25%" }}>
          <TextField
            label='User Search'
            variant="outlined"
            name="userSearch"
            onChange={(e) => this.handleChange(e)}
            value={this.state.userSearch}
            style={{margin: '3%'}}
          />
        </form>

        <UserCard user={this.state} />
        <Grid container lg={12}>
          {this.state.followers.length >= 1 ? (
            this.state.followers.map((follower) => (
              <FollowCard key={follower.id} follower={follower} />
            ))
          ) : (
            <p style={{ display: "flex", justifyContent: "center" }}>
              No Followers
            </p>
          )}
        </Grid>
        {console.log("bs: App.js : state CDM", this.state)}
      </Container>
    );
  }
}

export default App;
