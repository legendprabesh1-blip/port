/* 1. Pull Rope Light/Dark Mode Switcher */
const ropeToggle = document.getElementById('ropeToggle');
ropeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

/* 2. Mobile Menu Toggle */
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('open');
}

/* 3. Animated Dynamic Role Switcher (Updates both header and photo overlap) */
const roles = ["Vibe Coder", "Web Developer", "UI/UX Designer", "App Developer"];
let currentIndex = 0;
const roleElement = document.getElementById("role-title");
const photoRoleElement = document.getElementById("photo-role-title");

setInterval(() => {
    currentIndex = (currentIndex + 1) % roles.length;
    
    // Fade out
    roleElement.style.opacity = '0';
    photoRoleElement.style.opacity = '0';
    
    setTimeout(() => {
        roleElement.textContent = roles[currentIndex];
        photoRoleElement.textContent = roles[currentIndex];
        
        // Fade in
        roleElement.style.opacity = '1';
        photoRoleElement.style.opacity = '1';
    }, 200);
}, 2500);

/* 4. Live Clock */
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

/* 5. Interactive Modal Windows for Magic Doors */
function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

/* 6. 3D Tilt Effect on Profile Card Animation */
const profileCard = document.getElementById('profileCard');
if (profileCard) {
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
        profileCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
}

/* 7. Canvas Particle Background Animation */
const canvas = document.getElementById('particlesCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = [];
for (let i = 0; i < 35; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    });

    requestAnimationFrame(animateParticles);
}
animateParticles();