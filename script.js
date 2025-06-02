// Global variables
let isMenuOpen = false;

// DOM elements
const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');
const currentYearSpan = document.getElementById('current-year');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');
const projectsGrid = document.getElementById('projects-grid');
const experienceList = document.getElementById('experience-list');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeHeader();
    initializeMobileMenu();
    initializeContactForm();
    loadProjects();
    loadExperience();
    setCurrentYear();
    initializeSmoothScrolling();
    initializeResponsiveFeatures();
});

// Header scroll effect
function initializeHeader() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking on navigation links
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });
}

function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        mobileNav.classList.remove('hidden');
        mobileMenuBtn.innerHTML = '<i class="fas fa-times h-6 w-6"></i>';
    } else {
        mobileNav.classList.add('hidden');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars h-6 w-6"></i>';
    }
}

function closeMobileMenu() {
    isMenuOpen = false;
    mobileNav.classList.add('hidden');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars h-6 w-6"></i>';
}

// Contact form functionality
function initializeContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Simulate form submission
        console.log('Form submitted:', data);
        
        // Show success toast
        showToast('Mensagem enviada com sucesso! Retornarei em breve.');
        
        // Reset form
        contactForm.reset();
    });
}

// Toast notification
function showToast(message) {
    const toastMessage = document.getElementById('toast-message');
    toastMessage.textContent = message;
    
    toast.classList.remove('hidden');
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 300);
    }, 3000);
}

// Load projects data with responsive images
function loadProjects() {
    const projects = [
        {
            title: 'Infor Go',
            description: 'Site desenvolvido com base na disciplina técnica de Informática, apresentando informações e dados relevantes sobre o curso.',
            image: 'public/banner_project_02.png',
            tags: ['JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/JoaoL1003/Infor-GO',
            //demo: 'https://demo.com'
        },
        {
            title: 'Tech Sênior Games',
            description: 'Desenvolvimento, em equipe, de um site interativo voltado ao público idoso, com foco em inclusão digital e bem-estar.',
            image: 'public/banner_project_03.png',
            tags: ['JavaScript', 'CSS', 'HTML'],
            github: 'https://github.com/JoaoL1003/Tech-Senior-Games',
            //demo: 'https://demo.com'
        },
        {
            title: 'Estante Viva',
            description: 'Projeto Social Escolar 2025 - Reformulação completa do sistema bibliotecário escolar.',
            image: 'public/banner_project_04.png',
            tags: ['CSS Grid', 'JavaScript', 'Responsive', 'HTML'],
            github: 'https://github.com/JoaoL1003/PROJETO-SOCIAL---ADMIN',
            //demo: 'https://demo.com'
        }
    ];
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div style="overflow: hidden;">
                <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
            </div>
            
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                
                <div class="project-buttons">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-outline btn-sm">
                        <i class="fab fa-github mr-2"></i>
                        Código
                    </a> 
                </div>
            </div>
        </div>
    `).join('');
}

//Code for DEMON PROJECTS
/*
    <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn-primary btn-sm">
        <i class="fas fa-external-link-alt mr-2"></i>
        Demo
    </a>
*/

// Load experience data with improved mobile layout
function loadExperience() {
    const experiences = [
        {
            title: 'Ensino Médio Profissional Integrado - Informática',
            company: 'EEEP José de Barcelos',
            period: '2023 - Presente',
            location: 'Fortaleza, CE',
            description: [
                'Aprendizado de HTML, CSS e JavaScript',
                'Desenvolvimento de projetos pessoais para praticar as habilidades',
                'Conhecimentos Básicos em Git e Github',
                'Conhecimentos em Scrum',
                'Conhecimentos em Figma'
            ],
            technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'Figma'],
            icon: 'fas fa-book-open'
        },
        {
            title: 'Certificado em Web Design Responsivo',
            company: 'Certificação Profissional',
            period: '2024 - 300h',
            location: 'FreeCodeCamp',
            description: [
                'Criação de animações',
                'Aprimoramento de habilidades com HTML e CSS',
                'Desenvolvimento de interfaces responsivas e modernas'
            ],
            technologies: ['Responsive', 'Certificate', 'HTML', 'CSS'],
            icon: 'fas fa-code'
        },
        {
            title: 'Projetos e Prática',
            company: 'Estante Viva',
            period: '2023 - Presente',
            location: 'Biblioteca',
            description: [
                'Desenvolvimento de um novo sistema para Biblioteca',
                'Exerço a função de um dos líderes do projeto',
                'Uso do GitHub para versionamento e documentação',
                'Foco em criar código limpo e bem estruturado'
            ],
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'GitHub', 'Responsive Design'],
            icon: 'fas fa-users'
        }
    ];
    
    experienceList.innerHTML = experiences.map(exp => `
        <div class="experience-card">
            <div class="experience-header">
                <div class="experience-icon">
                    <div class="experience-icon-bg">
                        <i class="${exp.icon}"></i>
                    </div>
                    <div>
                        <h3 class="experience-title">${exp.title}</h3>
                        <div class="experience-company">${exp.company}</div>
                    </div>
                </div>
                <div>
                    <div class="experience-meta">
                        <i class="fas fa-calendar mr-2"></i>
                        ${exp.period}
                    </div>
                    <div class="experience-meta">
                        <i class="fas fa-map-marker-alt mr-2"></i>
                        ${exp.location}
                    </div>
                </div>
            </div>
            
            <ul class="experience-list">
                ${exp.description.map(item => `<li>${item}</li>`).join('')}
            </ul>
            
            <div class="experience-tech">
                ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Set current year in footer
function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
}

// Enhanced smooth scrolling with responsive offset
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const extraOffset = window.innerWidth < 768 ? 20 : 0; // Extra offset for mobile
                const targetPosition = targetSection.offsetTop - headerHeight - extraOffset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (isMenuOpen) {
                    closeMobileMenu();
                }
            }
        });
    });
}

// New function to handle responsive features
function initializeResponsiveFeatures() {
    // Handle viewport changes
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Close mobile menu on resize to desktop
            if (window.innerWidth >= 768 && isMenuOpen) {
                closeMobileMenu();
            }
            
            // Recalculate animations
            handleViewportChange();
        }, 250);
    });
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(function() {
            if (isMenuOpen) {
                closeMobileMenu();
            }
        }, 100);
    });
}

// Handle viewport changes for animations
function handleViewportChange() {
    // Re-trigger intersection observer for elements that might have changed
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .experience-card, .stat-card');
    animatedElements.forEach(element => {
        if (element.classList.contains('animate-fade-in')) {
            element.classList.remove('animate-fade-in');
            observer.observe(element);
        }
    });
}

// Enhanced intersection observer with responsive thresholds
const observerOptions = {
    threshold: window.innerWidth < 768 ? 0.05 : 0.1,
    rootMargin: window.innerWidth < 768 ? '0px 0px -20px 0px' : '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .experience-card, .stat-card');
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// Performance optimization: Lazy load images
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Touch event handling for better mobile interaction
document.addEventListener('touchstart', function() {}, {passive: true});
document.addEventListener('touchmove', function() {}, {passive: true});
