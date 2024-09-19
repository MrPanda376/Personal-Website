# Usa un'immagine di base con Node.js
FROM node:16

# Imposta la directory di lavoro all'interno del container
WORKDIR /app

# Copia i file del progetto nel container
COPY . .

# Installa le dipendenze del sito web
RUN npm install

# Espone la porta su cui gira il sito (es. 1000)
EXPOSE 1000

# Comando di avvio del sito web
CMD ["npm", "start"]