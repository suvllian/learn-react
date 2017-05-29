module.exports = {
  mapStateToProps: state => {
    return {
   	  id: state.Register.id || 0,
      username: state.Register.username,
      password: state.Register.password
    }
  }
}