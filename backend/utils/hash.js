import  bcrypt from 'bcryptjs';

const password = "Contactpsw_93"; 
const saltRounds = 10;

bcrypt.hash(password, saltRounds, function(err, hash) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Hashed password:", hash);
});
