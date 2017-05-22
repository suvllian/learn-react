module.exports = {
  mapStateToProps: state => {
    return {
   	  id: state.Login.id || state.Register.id,
   	  phone: state.Register.phone,
   	  email: state.Resume.email,
      name: state.Resume.name,
      username: state.Resume.username,
      highestDegree: state.Resume.highestDegree,
      workYears: state.Resume.workYears,
      city: state.Resume.city,
      education: state.Resume.education,
      work: state.Resume.work,
      words: state.Resume.words
    }
  }
}