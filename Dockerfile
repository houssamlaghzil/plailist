# Étape 1 : Utiliser une image Node.js officielle
FROM node:18-alpine AS builder

# Étape 2 : Définir le répertoire de travail
WORKDIR /app

# Étape 3 : Copier les fichiers package.json et yarn.lock
COPY package.json yarn.lock ./

# Étape 4 : Installer les dépendances
RUN yarn install --frozen-lockfile

# Étape 5 : Copier le reste du code source
COPY . .

# Étape 6 : Construire l'application Next.js
RUN yarn build

# Étape 7 : Installer un serveur HTTP léger pour servir les fichiers statiques
FROM nginx:stable-alpine

# Étape 8 : Copier les fichiers build dans le répertoire nginx
COPY --from=builder /app/out /usr/share/nginx/html

# Étape 9 : Exposer le port 80
EXPOSE 80

# Étape 10 : Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]


# Ajoutez avant la commande RUN yarn build
ARG NEXT_PUBLIC_FIREBASE_API_KEY
ARG NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
ARG NEXT_PUBLIC_FIREBASE_PROJECT_ID
# Ajoutez d'autres variables si nécessaire

# Passer les variables d'environnement
ENV NEXT_PUBLIC_FIREBASE_API_KEY=$NEXT_PUBLIC_FIREBASE_API_KEY
ENV NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=$NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
ENV NEXT_PUBLIC_FIREBASE_PROJECT_ID=$NEXT_PUBLIC_FIREBASE_PROJECT_ID
# Ajoutez d'autres variables si nécessaire

# Puis exécutez le build
RUN yarn build
