const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await delay(1000);  // Pause de 1 seconde entre les enregistrements
  }
}

// Exemple d'utilisation
iterateWithAsyncAwait([1, 2, 3, 4]);











const fetchData = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Données simulées de l'API");
      }, 2000);  // Simule une requête qui prend 2 secondes
    });
  };
  
  async function awaitCall() {
    const data = await fetchData();
    console.log(data);
  }
  
  // Exemple d'utilisation
  awaitCall();






  const fetchDataWithError = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5;
        success ? resolve("Données récupérées") : reject("Erreur de l'API");
      }, 2000);
    });
  };
  
  async function awaitCallWithErrorHandling() {
    try {
      const data = await fetchDataWithError();
      console.log(data);
    } catch (error) {
      console.error("Erreur :", error);  // Message d'erreur convivial
    }
  }
  
  // Exemple d'utilisation
  awaitCallWithErrorHandling();
  
  
