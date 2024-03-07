function telephoneCheck(str) {
    let regExp = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  
    if (regExp.test(str)) {
      return true
    } else {
      return false
    }
  
  }
  
  console.log(telephoneCheck("(555)555-5555"));