module.exports = {
  mapStateToProps: state => {
  	return {
  	  isLoginSuccess: state.Login.isLoginSuccess || false,
  	  loginId: state.Login.loginId || 0
  	}
  }
}