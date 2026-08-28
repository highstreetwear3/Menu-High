// HIGH STREETWEAR - NFC Menu Script

document.addEventListener('DOMContentLoaded', function() {
    // Animación de entrada
    const nfcCard = document.querySelector('.nfc-card');
    const menuCard = document.querySelector('.menu-card');
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Efecto de carga inicial
    setTimeout(() => {
        nfcCard.style.opacity = '1';
        nfcCard.style.transform = 'translateY(0)';
    }, 100);
    
    setTimeout(() => {
        menuCard.style.opacity = '1';
        menuCard.style.transform = 'translateY(0)';
    }, 300);
    
    // Auto-scroll en móvil después de 2 segundos
    setTimeout(() => {
        if (window.innerWidth <= 860) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    }, 2000);
    
    // Efecto ripple en los items del menú
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Crear efecto de onda
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            this.appendChild(ripple);
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Actualizar enlaces (reemplaza con tus URLs reales)
    const links = {
        whatsapp: 'https://wa.me/TUNUMERO',
        instagram: 'https://instagram.com/TUUSUARIO',
        google: 'https://g.page/TUGOOGLEREVIEW/review'
    };
    
    // Aplicar enlaces a los items del menú
    const menuItemsArray = Array.from(menuItems);
    if (menuItemsArray[0]) menuItemsArray[0].href = links.whatsapp;
    if (menuItemsArray[1]) menuItemsArray[1].href = links.instagram;
    if (menuItemsArray[2]) menuItemsArray[2].href = links.google;
});

// Agregar estilos dinámicos para el efecto ripple
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(59, 130, 246, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .nfc-card, .menu-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
`;
document.head.appendChild(style);