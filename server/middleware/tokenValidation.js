// Le middleware est conçu pour valider un jeton JWT (JSON Web Token) présent dans l'en-tête de la requête.
const jwt = require("jsonwebtoken");
const { restart } = require("nodemon");

// Middleware de validation du jeton
module.exports.validateToken = (req, res, next) => {
  // Objet pour stocker les détails de la réponse en cas d'échec
  let response = {};

  try {
    // Vérifie si l'en-tête de la requête contient le champ 'authorization' avec le jeton
    if (!req.headers.authorization) {
      throw new Error("Token is missing from header");
    }

    // Récupère le jeton de l'en-tête en le divisant à partir de la chaîne 'Bearer'
    const userToken = req.headers.authorization.split("Bearer")[1].trim();

    // Décode et vérifie le jeton à l'aide de la clé secrète
    const decodedToken = jwt.verify(
      userToken,
      process.env.SECRET_KEY || "default-secret-key"
    );

    // Si la validation du jeton est réussie, passe au middleware suivant
    return next();
  } catch (error) {
    // Capture toute erreur qui pourrait survenir pendant le processus de validation du jeton
    console.error("Error in tokenValidation.js", error);

    // Définit le statut de la réponse à 401 (Non autorisé) en cas d'échec de validation
    response.status = 401;

    // Stocke le message d'erreur dans l'objet de réponse
    response.message = error.message;
  }

  // Envoie une réponse avec le statut et le message appropriés en cas d'échec de validation du jeton
  return res.status(response.status).send(response);
};
