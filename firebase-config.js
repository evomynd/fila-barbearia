// Configuração do Firebase para Seu Vizinho Barbearia
const firebaseConfig = {
    apiKey: "AIzaSyCyTJVlgvkLa2-SUNaxAlOiTezcXfjiP64",
    authDomain: "seu-vizinho-barbearia.firebaseapp.com",
    projectId: "seu-vizinho-barbearia",
    storageBucket: "seu-vizinho-barbearia.firebasestorage.app",
    messagingSenderId: "25346983688",
    appId: "1:25346983688:web:727308786e34874ae50ebd"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Exportar serviços
window.auth = firebase.auth();
window.db = firebase.firestore();
window.googleProvider = new firebase.auth.GoogleAuthProvider();
