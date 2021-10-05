const Verify = password => {     
  if(password === null || password === undefined || password.length < 8){
    return false;
  }
  if (password.match(/\d/) && password.match(/[A-Z]/) && password.match(/[a-z]/)) {
    return true;
  } else {
    return false;
  }
}
