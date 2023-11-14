const userService = require("../services/userService");

// Contrôleur pour la création d'un utilisateur
module.exports.createUser = async (req, res) => {
  // Objet pour stocker les détails de la réponse
  let response = {};

  try {
    // Appelle la fonction createUser du service utilisateur avec les données de la requête
    const responseFromService = await userService.createUser(req.body);
    response.status = 200;
    response.message = "User successfully created";
    response.body = responseFromService;
  } catch (error) {
    console.error("Something went wrong in userController.js", error);
    response.status = 400;
    response.message = error.message;
  }

  // Renvoie la réponse au client avec le statut approprié
  return res.status(response.status).send(response);
};

// Contrôleur pour la connexion d'un utilisateur
module.exports.loginUser = async (req, res) => {
  // Objet pour stocker les détails de la réponse
  let response = {};

  try {
    // Appelle la fonction loginUser du service utilisateur avec les données de la requête
    const responseFromService = await userService.loginUser(req.body);
    response.status = 200;
    response.message = "User successfully logged in";
    response.body = responseFromService;
  } catch (error) {
    console.error("Error in loginUser (userController.js)");
    response.status = 400;
    response.message = error.message;
  }

  // Renvoie la réponse au client avec le statut approprié
  return res.status(response.status).send(response);
};

// Contrôleur pour récupérer le profil d'un utilisateur
module.exports.getUserProfile = async (req, res) => {
  // Objet pour stocker les détails de la réponse
  let response = {};

  try {
    // Appelle la fonction getUserProfile du service utilisateur avec les données de la requête
    const responseFromService = await userService.getUserProfile(req);
    response.status = 200;
    response.message = "Successfully got user profile data";
    response.body = responseFromService;
  } catch (error) {
    console.log("Error in userController.js");
    response.status = 400;
    response.message = error.message;
  }

  // Renvoie la réponse au client avec le statut approprié
  return res.status(response.status).send(response);
};

// Contrôleur pour mettre à jour le profil d'un utilisateur
module.exports.updateUserProfile = async (req, res) => {
  // Objet pour stocker les détails de la réponse
  let response = {};

  try {
    // Appelle la fonction updateUserProfile du service utilisateur avec les données de la requête
    const responseFromService = await userService.updateUserProfile(req);
    response.status = 200;
    response.message = "Successfully updated user profile data";
    response.body = responseFromService;
  } catch (error) {
    console.log("Error in updateUserProfile - userController.js");
    response.status = 400;
    response.message = error.message;
  }

  // Renvoie la réponse au client avec le statut approprié
  return res.status(response.status).send(response);
};

// Ce fichier contient les contrôleurs pour les différentes opérations liées à la gestion des utilisateurs.
