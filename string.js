var exports = module.exports = {};

function PasswordMessage(m){
  this.name="Password Message";
  this.message=m;
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(unicode >= min && unicode <= max){
      return true;
    }
    else{
      return false;
    }
}

function inSpecial(char, array){
  let unicode = char.charCodeAt(0);
  let yn = false;
  for( let x= 0; x < array.length; x++){
    if(unicode == array[x]){
      yn = true;
    }
  }
  return yn;
}
exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
  let hasUpper = false;
    try{
      for(let x = 0; x < str.length, x++){
        if(inRange(str[x], 65, 90)==true){
          hasUpper = true;
          throw new PasswordMessage("Has uppercase character");
        }
      }
      if(hasUpper = false){
        throw new PasswordMessage("Does not have uppercase character");
    }
  }
  catch(e){
    return hasUpper;
    console.log(e.name+": "+e.message);
  }
}



exports.containsLower =function(str){
  let hasLower = false;
    try{
      for(let x = 0; x < str.length, x++){
        if(inRange(str[x], 97, 112)==true){
          hasLower = true;
          throw new PasswordMessage("Has lowercase character");
        }
      }
      if(hasLower = false){
        throw new PasswordMessage("Does not have lowercase character");
    }
  }
  catch(e){
    return hasLower;
    console.log(e.name+": "+e.message);
  }
}


exports.containsNumerical =function(str){
  let hasNumber = false;
    try{
      for(let x = 0; x < str.length, x++){
        if(inRange(str[x], 48, 57)==true){
          hasNumber = true;
          throw new PasswordMessage("Has number");
        }
      }
      if(hasNumber = false){
        throw new PasswordMessage("Does not have number");
    }
  }
  catch(e){
    return hasNumber;
    console.log(e.name+": "+e.message);
  }
}


exports.containsSpecial =function(str){
  let hasSpecial = false;
  let special = [33,64,35,36,37,94,38,42];
  try{
    for(let x = 0; x < str.length, x++){
      if(inSpecial(str[x], special) == true){
        hasSpecial = true;
        throw new PasswordMessage("Has special character");
      }
    }
    if(hasSpecial == false){
      throw new PasswordMessage("Does not have special character");
    }
  }
  catch(e){
    return hasSpecial;
    console.log(e.name+": "+e.message);
  }
}
