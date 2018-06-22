// Déclaration de la fonction
function calculAge() {
  //Déclaration des variables
  var age = document.getElementById('age').value;
  var regex = /^[\d]+$/;
  //Boite de dialogue avec appel des variables
  if(regex.test(age) && age < 130) {
    if(age >= 18){
      alert('Vous êtes majeur');
      } else {
      alert('Vous êtes mineur');
      }
  } else {
    alert('Age invalide');
  }
}
