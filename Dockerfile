#Specifica l'immagine base
FROM node:14

#Imposta la directory di lavoro del container
WORKDIR /usr/src/app

#Copia i file package.json e package-lock.json
COPY package*.json ./

#Installa le dipendenze
RUN npm install

#Copia i sorgenti node
COPY . .

#Esponi la porta dell'app del container
EXPOSE 3000

#Avvia l'app
CMD ["node", "index.js"]