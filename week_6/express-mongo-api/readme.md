# Modular CRUD API: Client Project Tracker

Service REST modulaire construit avec Express, Mongoose et ES Modules. L'architecture est organisée en modules (auth, project) avec authentification JWT et contrôle d'accès par rôles (RBAC).

## 🏗️ Architecture

La structure du projet :

```
src/
  main.js
  databases/connect-mongo.js
  routes/
    index.js
    auth/index.js
    project/index.js
  modules/
    auth/
      model/index.js        # Schéma User
      services/index.js     # Logique d'auth (register/login)
      index.js              # (optionnel) réexport / contrôleur
    project/
      model/index.js        # Schéma Project
      services/index.js     # CRUD + règles RBAC
      index.js              # (optionnel) réexport / contrôleur
  middlewares/
    auth.js                # Validation JWT
    roles.js               # Vérification des rôles
```

## ⚙️ Installation & exécution

1. Installer les dépendances :

```powershell
cd c:\Users\HP\Desktop\mes_projects\projet_express\express-mongo-api
npm install
```

2. Créer un fichier `.env` (existant dans le repo) avec au minimum :

```
PORT=5000
MONGO_URL=mongodb://localhost:27017/project_db
JWT_SECRET=un_secret_suffisamment_long
```

3. Lancer le serveur en développement :

```powershell
npm run dev
```

Le serveur écoute par défaut sur le `PORT` (défaut utilisé ici : 5000).

## 🔑 Authentification et rôles

- admin : peut voir, créer, modifier et supprimer tous les projets.
- member : peut voir, créer, modifier et supprimer uniquement ses propres projets.

Un token JWT contient au minimum : `{ id: <userId>, role: 'member'|'admin' }`.

> Note : un script utilitaire existe pour créer/mettre à jour un utilisateur admin et afficher un token : `scripts/createAdmin.js`.

Pour obtenir un token admin (exécution depuis Powershell) :

```powershell
cd c:\Users\HP\Desktop\mes_projects\projet_express\express-mongo-api
node scripts/createAdmin.js
```

Le script affichera l'email, le mot de passe et le token JWT à utiliser dans l'en-tête `Authorization: Bearer <token>`.

## 🔗 Endpoints (réels dans ce projet)

Base path : `/api`

### Auth (public)

- POST /api/auth/register
  - Description : créer un utilisateur (role par défaut : member)
  - Body : { "email": "...", "password": "..." }

- POST /api/auth/login
  - Description : authentifier et obtenir un token JWT
  - Body : { "email": "...", "password": "..." }

### Projects

> Note : les routes project sont montées sur `/api/project` (singulier).

- POST /api/project
  - Créer un projet
  - Accès : member/admin
  - Body : { "title": "...", "description": "..." }

- GET /api/project
  - Récupérer tous les projets (si admin : tous; sinon : seulement ceux de l'utilisateur)
  - Accès : member/admin

- GET /api/project/:id
  - Récupérer un projet par ID
  - Accès : member/admin (owner ou admin)

- PUT /api/project/:id
  - Mettre à jour un projet (owner ou admin)
  - Accès : member/admin
  - Body : { "title"?, "description"? }

- DELETE /api/project/:id
  - Supprimer un projet (owner ou admin)
  - Accès : member/admin

## ✅ Vérifications importantes effectuées

- Le serveur démarre (`src/main.js`) et monte les routes sur `/api`.
- Les routers `auth` et `project` sont correctement montés dans `src/routes/index.js`.
- Middleware `auth` vérifie et décode le token JWT (attend `Authorization: Bearer <token>`).
- Les endpoints `project` exigent parfois `isAdmin` dans le router original ; ici le service de `project` autorise les owners et les admins (vérifier rôle dans les services).

## 🧪 Comment tester rapidement

1. Démarrer le serveur :

```powershell
npm run dev
```

2. Créer un token admin si nécessaire :

```powershell
node scripts/createAdmin.js
```

3. Tester une requête GET (exemple avec curl) :

```powershell
curl -H "Authorization: Bearer <TOKEN_ADMIN>" http://localhost:5000/api/project
```

Ou utiliser Postman / REST Client en remplaçant `<TOKEN_ADMIN>` par le token affiché par le script.

## Limitations & recommandations

- Le fichier `test/projects.rest` a été adapté pour utiliser `/api/project` (singulier). Assure-toi d'utiliser le token approprié pour les opérations nécessitant l'admin.
- Recommandé : ajouter un middleware global d'erreur, configurer ESLint et ajouter quelques tests unitaires.

