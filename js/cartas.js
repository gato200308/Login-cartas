// Sistema de Calendario de Amor
class CartasSystem {
    constructor() {
        this.currentUser = this.getCurrentUser();
        this.cartas = this.getCartasData();
        this.selectedDay = null;
        this.init();
    }

    init() {
        console.log('Inicializando sistema de cartas...');
        this.checkAuth();
        this.renderCalendar();
        this.setupEventListeners();
        this.showWelcomeMessage();
        this.updateNextCardBannerAuto();
        
        // Actualizar banner cada segundo
        setInterval(() => {
            this.updateNextCardBannerAuto();
        }, 1000);
    }

    checkAuth() {
        if (!this.currentUser) {
            window.location.href = 'index.html';
            return;
        }
        console.log('Usuario autenticado:', this.currentUser.username);
    }

    getCurrentUser() {
        const user = localStorage.getItem('currentUser');
        return user ? JSON.parse(user) : null;
    }

    showWelcomeMessage() {
        if (this.currentUser && this.currentUser.username === 'miniña') {
            const welcomeMessage = document.getElementById('welcomeMessage');
            if (welcomeMessage) {
                welcomeMessage.style.display = 'block';
            }
        }
    }

    getCartasData() {
        return [
            // Agosto 2025 - CORREGIDO: 1 de agosto es VIERNES, 5 de agosto es MARTES (aniversario)
            // Calendario real de agosto 2025:
            // Dom  Lun  Mar  Mié  Jue  Vie  Sáb
            //                   1    2    3
            //  4    5    6    7    8    9   10
            // 11   12   13   14   15   16   17
            // 18   19   20   21   22   23   24
            // 25   26   27   28   29   30   31
            
            { fecha: "2025-08-01", archivo: "carta-01.html", mes: "ago", mesNum: 0 }, // Viernes 1
            { fecha: "2025-08-02", archivo: "carta-02.html", mes: "ago", mesNum: 0 }, // Sábado 2
            { fecha: "2025-08-03", archivo: "carta-03.html", mes: "ago", mesNum: 0 }, // Domingo 3
            { fecha: "2025-08-04", archivo: "carta-04.html", mes: "ago", mesNum: 0 }, // Lunes 4
            { fecha: "2025-08-05", archivo: "carta-05.html", esAniversario: true, mes: "ago", mesNum: 0 }, // Martes 5 - ANIVERSARIO
            { fecha: "2025-08-06", archivo: "carta-06.html", mes: "ago", mesNum: 0 }, // Miércoles 6
            { fecha: "2025-08-07", archivo: "carta-07.html", mes: "ago", mesNum: 0 }, // Jueves 7
            { fecha: "2025-08-08", archivo: "carta-08.html", mes: "ago", mesNum: 0 }, // Viernes 8
            { fecha: "2025-08-09", archivo: "carta-09.html", mes: "ago", mesNum: 0 }, // Sábado 9
            { fecha: "2025-08-10", archivo: "carta-10.html", mes: "ago", mesNum: 0 }, // Domingo 10
            { fecha: "2025-08-11", archivo: "carta-11.html", mes: "ago", mesNum: 0 }, // Lunes 11
            { fecha: "2025-08-12", archivo: "carta-12.html", mes: "ago", mesNum: 0 }, // Martes 12
            { fecha: "2025-08-13", archivo: "carta-13.html", mes: "ago", mesNum: 0 }, // Miércoles 13
            { fecha: "2025-08-14", archivo: "carta-14.html", mes: "ago", mesNum: 0 }, // Jueves 14
            { fecha: "2025-08-15", archivo: "carta-15.html", mes: "ago", mesNum: 0 }, // Viernes 15
            { fecha: "2025-08-16", archivo: "carta-16.html", mes: "ago", mesNum: 0 }, // Sábado 16
            { fecha: "2025-08-17", archivo: "carta-17.html", mes: "ago", mesNum: 0 }, // Domingo 17
            { fecha: "2025-08-18", archivo: "carta-18.html", mes: "ago", mesNum: 0 }, // Lunes 18
            { fecha: "2025-08-19", archivo: "carta-19.html", mes: "ago", mesNum: 0 }, // Martes 19
            { fecha: "2025-08-20", archivo: "carta-20.html", mes: "ago", mesNum: 0 }, // Miércoles 20
            { fecha: "2025-08-21", archivo: "carta-21.html", mes: "ago", mesNum: 0 }, // Jueves 21
            { fecha: "2025-08-22", archivo: "carta-22.html", mes: "ago", mesNum: 0 }, // Viernes 22
            { fecha: "2025-08-23", archivo: "carta-23.html", mes: "ago", mesNum: 0 }, // Sábado 23
            { fecha: "2025-08-24", archivo: "carta-24.html", mes: "ago", mesNum: 0 }, // Domingo 24
            { fecha: "2025-08-25", archivo: "carta-25.html", mes: "ago", mesNum: 0 }, // Lunes 25
            { fecha: "2025-08-26", archivo: "carta-26.html", mes: "ago", mesNum: 0 }, // Martes 26
            { fecha: "2025-08-27", archivo: "carta-27.html", mes: "ago", mesNum: 0 }, // Miércoles 27
            { fecha: "2025-08-28", archivo: "carta-28.html", mes: "ago", mesNum: 0 }, // Jueves 28
            { fecha: "2025-08-29", archivo: "carta-29.html", mes: "ago", mesNum: 0 }, // Viernes 29
            { fecha: "2025-08-30", archivo: "carta-30.html", mes: "ago", mesNum: 0 }, // Sábado 30
            { fecha: "2025-08-31", archivo: "carta-31.html", mes: "ago", mesNum: 0 }, // Domingo 31
            
            // Septiembre 2025 - CORREGIDO: 1 de septiembre es LUNES
            // Calendario real de septiembre 2025:
            // Dom  Lun  Mar  Mié  Jue  Vie  Sáb
            //      1    2    3    4    5    6
            //  7    8    9   10   11   12   13
            // 14   15   16   17   18   19   20
            // 21   22   23   24   25   26   27
            // 28   29   30
            
            { fecha: "2025-09-01", archivo: "carta-32.html", mes: "sep", mesNum: 1 }, // Lunes 1
            { fecha: "2025-09-02", archivo: "carta-33.html", mes: "sep", mesNum: 1 }, // Martes 2
            { fecha: "2025-09-03", archivo: "carta-34.html", mes: "sep", mesNum: 1 }, // Miércoles 3
            { fecha: "2025-09-04", archivo: "carta-35.html", mes: "sep", mesNum: 1 }, // Jueves 4
            { fecha: "2025-09-05", archivo: "carta-36.html", esAniversario: true, mes: "sep", mesNum: 1 }, // Viernes 5 - ANIVERSARIO
            { fecha: "2025-09-06", archivo: "carta-37.html", mes: "sep", mesNum: 1 }, // Sábado 6
            { fecha: "2025-09-07", archivo: "carta-38.html", mes: "sep", mesNum: 1 }, // Domingo 7
            { fecha: "2025-09-08", archivo: "carta-39.html", mes: "sep", mesNum: 1 }, // Lunes 8
            { fecha: "2025-09-09", archivo: "carta-40.html", mes: "sep", mesNum: 1 }, // Martes 9
            { fecha: "2025-09-10", archivo: "carta-41.html", mes: "sep", mesNum: 1 }, // Miércoles 10
            { fecha: "2025-09-11", archivo: "carta-42.html", mes: "sep", mesNum: 1 }, // Jueves 11
            { fecha: "2025-09-12", archivo: "carta-43.html", mes: "sep", mesNum: 1 }, // Viernes 12
            { fecha: "2025-09-13", archivo: "carta-44.html", mes: "sep", mesNum: 1 }, // Sábado 13
            { fecha: "2025-09-14", archivo: "carta-45.html", mes: "sep", mesNum: 1 }, // Domingo 14
            { fecha: "2025-09-15", archivo: "carta-46.html", mes: "sep", mesNum: 1 }, // Lunes 15
            { fecha: "2025-09-16", archivo: "carta-47.html", mes: "sep", mesNum: 1 }, // Martes 16
            { fecha: "2025-09-17", archivo: "carta-48.html", mes: "sep", mesNum: 1 }, // Miércoles 17
            { fecha: "2025-09-18", archivo: "carta-49.html", mes: "sep", mesNum: 1 }, // Jueves 18
            { fecha: "2025-09-19", archivo: "carta-50.html", mes: "sep", mesNum: 1 }, // Viernes 19
            { fecha: "2025-09-20", archivo: "carta-51.html", mes: "sep", mesNum: 1 }, // Sábado 20
            { fecha: "2025-09-21", archivo: "carta-52.html", mes: "sep", mesNum: 1 }, // Domingo 21
            { fecha: "2025-09-22", archivo: "carta-53.html", mes: "sep", mesNum: 1 }, // Lunes 22
            { fecha: "2025-09-23", archivo: "carta-54.html", mes: "sep", mesNum: 1 }, // Martes 23
            { fecha: "2025-09-24", archivo: "carta-55.html", mes: "sep", mesNum: 1 }, // Miércoles 24
            { fecha: "2025-09-25", archivo: "carta-56.html", mes: "sep", mesNum: 1 }, // Jueves 25
            { fecha: "2025-09-26", archivo: "carta-57.html", mes: "sep", mesNum: 1 }, // Viernes 26
            { fecha: "2025-09-27", archivo: "carta-58.html", mes: "sep", mesNum: 1 }, // Sábado 27
            { fecha: "2025-09-28", archivo: "carta-59.html", mes: "sep", mesNum: 1 }, // Domingo 28
            { fecha: "2025-09-29", archivo: "carta-60.html", mes: "sep", mesNum: 1 }, // Lunes 29
            { fecha: "2025-09-30", archivo: "carta-61.html", mes: "sep", mesNum: 1 }, // Martes 30
            
            // Octubre 2025 - CORREGIDO: 1 de octubre es MIÉRCOLES, se acaba el 5 de octubre
            // Calendario real de octubre 2025:
            // Dom  Lun  Mar  Mié  Jue  Vie  Sáb
            //             1    2    3    4    5
            
            { fecha: "2025-10-01", archivo: "carta-62.html", mes: "oct", mesNum: 2 }, // Miércoles 1
            { fecha: "2025-10-02", archivo: "carta-63.html", mes: "oct", mesNum: 2 }, // Jueves 2
            { fecha: "2025-10-03", archivo: "carta-64.html", mes: "oct", mesNum: 2 }, // Viernes 3
            { fecha: "2025-10-04", archivo: "carta-65.html", mes: "oct", mesNum: 2 }, // Sábado 4
            { fecha: "2025-10-05", archivo: "carta-66.html", esAniversario: true, mes: "oct", mesNum: 2 } // Domingo 5 - ANIVERSARIO
        ];
    }

    renderCalendar() {
        console.log('Renderizando calendario...');
        const grid = document.getElementById('cartasGrid');
        if (!grid) {
            console.error('No se encontró el elemento cartasGrid');
            return;
        }
        
        grid.innerHTML = '';

        // Obtener el mes actual (0: agosto, 1: septiembre, 2: octubre)
        const hoy = new Date();
        const mesActual = hoy.getMonth(); // 0-11
        let mesInicio = 0; // Empezar con agosto
        
        // Si estamos en septiembre o después, mostrar desde agosto
        if (mesActual >= 7) { // Agosto es mes 7 (0-indexed)
            mesInicio = 0;
        }
        
        // Renderizar cada mes desde agosto hasta el mes actual
        for (let mes = mesInicio; mes <= 2; mes++) { // 0=agosto, 1=septiembre, 2=octubre
            const cartasDelMes = this.cartas.filter(carta => carta.mesNum === mes);
            if (cartasDelMes.length > 0) {
                const esUltimoMes = (mes === 2); // Octubre es el último mes
                this.renderMonthSection(cartasDelMes, mes, esUltimoMes);
            }
        }
    }

    renderMonthSection(cartasDelMes, mesIndex, esUltimoMes) {
        const grid = document.getElementById('cartasGrid');
        
        const monthSection = document.createElement('div');
        monthSection.className = 'month-section';
        
        const monthNames = ['Agosto 2025', 'Septiembre 2025', 'Octubre 2025'];
        const monthTitle = document.createElement('h3');
        monthTitle.className = 'month-title';
        monthTitle.textContent = monthNames[mesIndex];
        monthSection.appendChild(monthTitle);
        
        // Crear estructura de calendario real
        const calendarContainer = document.createElement('div');
        calendarContainer.className = 'calendar-container';
        
        const calendarGrid = document.createElement('div');
        calendarGrid.className = 'calendar-real-grid';
        
        // Días de la semana
        const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
        diasSemana.forEach(dia => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'calendar-day-header';
            dayHeader.textContent = dia;
            calendarGrid.appendChild(dayHeader);
        });
        
        // Obtener el primer día del mes y el número de días
        const primerDia = new Date(2025, mesIndex + 7, 1); // mesIndex 0=agosto, 1=septiembre, 2=octubre
        const primerDiaSemana = primerDia.getDay();
        const diasEnMes = new Date(2025, mesIndex + 8, 0).getDate(); // +8 porque mesIndex 0=agosto (mes 7)
        
        console.log(`Mes ${mesIndex}: primer día semana ${primerDiaSemana}, días en mes ${diasEnMes}`);
        
        // Agregar días vacíos al inicio
        for (let i = 0; i < primerDiaSemana; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day-empty';
            calendarGrid.appendChild(emptyDay);
        }
        
        // Agregar los días del mes
        for (let dia = 1; dia <= diasEnMes; dia++) {
            const fechaBuscar = `2025-${(mesIndex + 8).toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
            const carta = cartasDelMes.find(c => c.fecha === fechaBuscar);
            
            const dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day-real';
            
            if (carta) {
                const fechaCarta = new Date(carta.fecha + "T06:00:00");
                const hoy = new Date();
                
                dayDiv.innerHTML = `
                    <div class="day-number-real">
                        ${carta.esAniversario ? "💞 " : ""}${dia}
                    </div>
                    <div class="day-indicator">💌</div>
                `;
                
                if (hoy < fechaCarta) {
                    dayDiv.classList.add("locked");
                } else {
                    dayDiv.classList.add("available");
                }
                
                dayDiv.addEventListener('click', () => {
                    this.handleDayClick(carta, dayDiv, fechaCarta);
                });
            } else {
                dayDiv.innerHTML = `<div class="day-number-real">${dia}</div>`;
                dayDiv.classList.add("no-carta");
            }
            
            calendarGrid.appendChild(dayDiv);
        }
        
        calendarContainer.appendChild(calendarGrid);
        monthSection.appendChild(calendarContainer);
        
        // Mostrar contador para pruebas
        const countdownSection = document.createElement('div');
        countdownSection.className = 'countdown-section';
        countdownSection.innerHTML = `
            <div class="countdown-info">
                <h4>⏳ Próxima carta disponible</h4>
                <p>2025-08-01 a las 6:00 AM</p>
                <div id="countdown-timer">Próximamente...</div>
            </div>
        `;
        monthSection.appendChild(countdownSection);
        
        grid.appendChild(monthSection);
        console.log(`Mes ${mesIndex} renderizado`);
    }

    handleDayClick(carta, dayDiv, fechaCarta) {
        const ahora = new Date();

        if (this.selectedDay) {
            this.selectedDay.classList.remove("selected");
        }
        this.selectedDay = dayDiv;
        this.selectedDay.classList.add("selected");

        if (ahora < fechaCarta) {
            clearInterval(window.countdownInterval);
            this.showCountdownModal(carta.fecha);
            window.countdownInterval = setInterval(() => {
                this.showCountdown(carta.fecha);
            }, 1000);
        } else {
            clearInterval(window.countdownInterval);
            this.loadCarta(carta, fechaCarta);
        }
    }

    showCountdown(fechaStr) {
        const objetivo = new Date(fechaStr + "T06:00:00");
        const ahora = new Date();
        const diferencia = objetivo - ahora;

        const messageTitle = document.getElementById('messageTitle');
        const messageText = document.getElementById('messageText');
        const dateDisplay = document.getElementById('dateDisplay');

        if (diferencia <= 0) {
            messageTitle.textContent = "✅ ¡La carta ya está disponible!";
            messageText.textContent = "Haz clic de nuevo para leerla.";
            dateDisplay.textContent = "";
            clearInterval(window.countdownInterval);
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
        const segundos = Math.floor((diferencia / 1000) % 60);

        // Actualizar modal si está abierto
        const modalTitle = document.getElementById('modalTitle');
        const modalMessage = document.getElementById('modalMessage');
        const modalCountdown = document.getElementById('modalCountdown');
        
        if (modalTitle && modalMessage && modalCountdown) {
            modalTitle.textContent = "⏳ Aún no es tiempo...";
            modalMessage.innerHTML = `Esta carta se desbloqueará el <strong>${fechaStr}</strong> a las <strong>6:00 AM</strong>`;
            modalCountdown.textContent = `Faltan: ${dias}d ${horas}h ${minutos}m ${segundos}s`;
        }

        // Actualizar banner superior
        this.updateNextCardBanner(fechaStr, dias, horas, minutos, segundos);

        // Solo actualizar el área de mensaje si no hay modal abierto
        if (!document.getElementById('countdownModal').style.display || 
            document.getElementById('countdownModal').style.display === 'none') {
            messageTitle.textContent = "⏳ Aún no es tiempo...";
            messageText.innerHTML = `
                Esta carta se desbloqueará el <strong>${fechaStr}</strong> a las <strong>6:00 AM</strong><br>
                Faltan: <strong>${dias}d ${horas}h ${minutos}m ${segundos}s</strong>
            `;
            dateDisplay.textContent = "";
        }
    }

    updateNextCardBanner(fechaStr, dias, horas, minutos, segundos) {
        const banner = document.getElementById('nextCardBanner');
        const bannerInfo = document.getElementById('nextCardInfo');
        
        if (banner && bannerInfo) {
            banner.style.display = 'block';
            bannerInfo.textContent = `${fechaStr} - Faltan: ${dias}d ${horas}h ${minutos}m ${segundos}s`;
        }
    }

    updateNextCardBannerAuto() {
        const ahora = new Date();
        const proximaCarta = this.cartas.find(carta => {
            const fechaCarta = new Date(carta.fecha + "T06:00:00");
            return fechaCarta > ahora;
        });

        if (proximaCarta) {
            const fechaCarta = new Date(proximaCarta.fecha + "T06:00:00");
            const diferencia = fechaCarta - ahora;
            
            if (diferencia > 0) {
                const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
                const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
                const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
                const segundos = Math.floor((diferencia / 1000) % 60);
                
                this.updateNextCardBanner(proximaCarta.fecha, dias, horas, minutos, segundos);
            } else {
                // Si no hay cartas futuras, ocultar el banner
                const banner = document.getElementById('nextCardBanner');
                if (banner) {
                    banner.style.display = 'none';
                }
            }
        } else {
            // Si no hay cartas futuras, ocultar el banner
            const banner = document.getElementById('nextCardBanner');
            if (banner) {
                banner.style.display = 'none';
            }
        }
    }

    showCountdownModal(fechaStr) {
        const modal = document.getElementById('countdownModal');
        modal.style.display = 'flex';
        this.showCountdown(fechaStr);
    }

    updateNextCardBannerAuto() {
        const ahora = new Date();
        const proximaCarta = this.cartas.find(carta => {
            const fechaCarta = new Date(carta.fecha + "T06:00:00");
            return fechaCarta > ahora;
        });

        if (proximaCarta) {
            const fechaCarta = new Date(proximaCarta.fecha + "T06:00:00");
            const diferencia = fechaCarta - ahora;
            
            if (diferencia > 0) {
                const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
                const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
                const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
                const segundos = Math.floor((diferencia / 1000) % 60);
                
                this.updateNextCardBanner(proximaCarta.fecha, dias, horas, minutos, segundos);
            }
        }
    }

    loadCarta(carta, fechaCarta) {
        const messageTitle = document.getElementById('messageTitle');
        const messageText = document.getElementById('messageText');
        const dateDisplay = document.getElementById('dateDisplay');

        console.log('Cargando carta:', carta.archivo, 'para fecha:', carta.fecha);

        fetch(`cartas/${carta.archivo}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                console.log('Contenido de la carta cargado:', data.substring(0, 100) + '...');
                
                const dia = fechaCarta.getDate();
                const mes = fechaCarta.toLocaleDateString('es-ES', { month: 'long' });
                const mensajeBase = `💌 Carta del ${dia} de ${mes}`;
                const titulo = carta.esAniversario ? `💞 Aniversario - ${mensajeBase}` : mensajeBase;

                // Verificar que el contenido de la carta coincida con la fecha
                const tituloMatch = data.match(/<div class="carta-title">(.*?)<\/div>/);
                const tituloCarta = tituloMatch ? tituloMatch[1] : 'Título no encontrado';
                
                console.log('Título de la carta:', tituloCarta);
                console.log('Fecha esperada:', `${dia} de ${mes}`);
                console.log('Archivo:', carta.archivo);

                messageTitle.textContent = titulo;
                messageText.innerHTML = data;
                dateDisplay.textContent = `📅 ${carta.fecha}`;
                
                // Verificación adicional
                const diaMatch = tituloCarta.match(/Día (\d+)/);
                if (diaMatch) {
                    const numeroDia = parseInt(diaMatch[1]);
                    const archivoMatch = carta.archivo.match(/carta-(\d+)\.html/);
                    const numeroArchivo = archivoMatch ? parseInt(archivoMatch[1]) : 0;
                    
                    if (numeroDia !== numeroArchivo) {
                        console.warn('⚠️ ADVERTENCIA: El número del día en la carta no coincide con el archivo');
                        console.warn(`Día en carta: ${numeroDia}, Archivo: ${numeroArchivo}`);
                    }
                }
            })
            .catch(err => {
                console.error('Error al cargar la carta:', err);
                messageTitle.textContent = "⚠️ Error";
                messageText.textContent = `No se pudo cargar esta carta: ${err.message}`;
                dateDisplay.textContent = "";
            });
    }

    setupEventListeners() {
        // Cualquier evento adicional que necesites
    }
}

// Función global para cerrar el modal
function closeModal() {
    const modal = document.getElementById('countdownModal');
    if (modal) {
        modal.style.display = 'none';
        clearInterval(window.countdownInterval);
    }
}

// Inicializar el sistema de cartas
let cartasSystem;

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado, inicializando sistema...');
    cartasSystem = new CartasSystem();
}); 