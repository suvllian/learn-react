module.exports = {
  mapStateToProps: state => {
  	return {
  	  isLoginSuccess: state.Login.isLoginSuccess || false,
  	  id: state.Login.id || 0
  	}
  }
}