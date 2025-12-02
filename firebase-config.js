// Importe este arquivo no seu index.html ANTES do app.js
// Substitua com suas credenciais do Firebase

// INSTRUÇÕES:
// 1. Vá para https://console.firebase.google.com/
// 2. Crie um novo projeto ou selecione um existente
// 3. Adicione um app Web
// 4. Copie as configurações e cole abaixo
// 5. Ative Authentication (Google e Email/Password)
// 6. Ative Firestore Database

const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    projectId: "SEU_PROJETO_ID",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Exportar serviços
window.auth = firebase.auth();
window.db = firebase.firestore();
window.googleProvider = new firebase.auth.GoogleAuthProvider();
