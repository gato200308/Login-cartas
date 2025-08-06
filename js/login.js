// Sistema de Login y Registro
class LoginSystem {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        this.currentUser = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.checkAuth();
    }

    setupEventListeners() {
        // Login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }
    }

    handleLogin(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        
        if (!username || !password) {
            this.showMessage('Por favor completa todos los campos', 'error');
            return;
        }

        // Usuario predefinido especial
        if (username === 'miniña' && password === '050325') {
            this.currentUser = {
                id: 1,
                username: 'miniña',
                password: '050325',
                createdAt: new Date().toISOString()
            };
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            this.showMessage('¡Bienvenida mi amor! 💕 25 de marzo de 2025 - El día que comenzamos nuestra historia de amor', 'success');
            
            setTimeout(() => {
                window.location.href = 'cartas.html';
            }, 3000);
            return;
        }

        const user = this.users.find(u => u.username === username && u.password === password);
        
        if (user) {
            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.showMessage('¡Login exitoso!', 'success');
            
            setTimeout(() => {
                window.location.href = 'cartas.html';
            }, 1000);
        } else {
            this.showMessage('Usuario o contraseña incorrectos', 'error');
        }
    }

    showMessage(message, type) {
        // Remover mensajes anteriores
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;

        const container = document.querySelector('.container');
        container.insertBefore(messageDiv, container.firstChild);

        // Auto-remover después de 3 segundos
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 3000);
    }

    checkAuth() {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            this.currentUser = JSON.parse(currentUser);
            // Si ya está logueado, redirigir a cartas
            if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
                window.location.href = 'cartas.html';
            }
        }
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUser = null;
        window.location.href = 'index.html';
    }
}

// Inicializar el sistema de login
document.addEventListener('DOMContentLoaded', () => {
    new LoginSystem();
});

// Función global para logout (usada en cartas.html)
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
} 