# language: fr
Fonctionnalité: Paiement par carte
  Je suis a une station essence
  Je souhaite payer par carte

Contexte: Card
  Etant donné que j'ai une carte bancaire

Scénario: Essayer de prendre de l'essence avec un solde insuffisant
  Etant donné que j'ai inséré ma carte bancaire
  Et que j'ai saisi le code
  Quand j'appuie sur valider
  Alors la machine m'annonce "Solde insuffisant"
  Alors la machine me demande "Retirer votre carte bancaire"

Scénario: Essayer de prendre de l'essence avec un code incorrect
  Etant donné que j'ai inséré ma carte bancaire
  Et que j'ai saisi un mauvais code
  Quand j'appuie sur valider
  Alors la machine m'annonce "Code incorrect"
  Alors la machine me demande "Retirer votre carte bancaire"

Scénario: Essayer de prendre de l'essence avec un code correct et un solde > 120€
  Etant donné que ma carte bancaire a un solde suffisant
  Etant donné que j'ai inséré ma carte bancaire
  Et que j'ai saisi le code
  Quand j'appuie sur valider
  Alors la machine me demande "Voulez-vous une facture"
