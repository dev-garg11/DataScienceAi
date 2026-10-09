// Morph Meta Academy - Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Management (Dark / Light Mode)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
    
    // Check saved theme or preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    function toggleTheme() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
    }

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener('click', toggleTheme);

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenu = document.getElementById('close-mobile-menu');

    function openDrawer() {
        if (mobileMenu) {
            mobileMenu.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeDrawer() {
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', openDrawer);
    }

    if (closeMobileMenu) {
        closeMobileMenu.addEventListener('click', closeDrawer);
    }

    // Close on backdrop click
    if (mobileMenu) {
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                closeDrawer();
            }
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            closeDrawer();
        });
    });

    // 3. Batch Countdown Timer
    function startCountdown() {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 4);
        targetDate.setHours(19, 0, 0, 0);

        function update() {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) return;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const daysEl = document.getElementById('cd-days');
            const hoursEl = document.getElementById('cd-hours');
            const minutesEl = document.getElementById('cd-minutes');
            const secondsEl = document.getElementById('cd-seconds');

            if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
            if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
            if (minutesEl) minutesEl.innerText = String(minutes).padStart(2, '0');
            if (secondsEl) secondsEl.innerText = String(seconds).padStart(2, '0');
        }

        update();
        setInterval(update, 1000);
    }
    startCountdown();

    // 4. Curriculum Tab Filtering & Accordion
    const trackBtns = document.querySelectorAll('.track-btn');
    const trackModules = document.querySelectorAll('.curriculum-track-content');

    trackBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            trackBtns.forEach(b => {
                b.classList.remove('active', 'bg-brand-600', 'text-white', 'shadow-lg');
                b.classList.add('bg-gray-100', 'dark:bg-slate-800', 'text-gray-700', 'dark:text-gray-300');
            });
            btn.classList.add('active', 'bg-brand-600', 'text-white', 'shadow-lg');
            btn.classList.remove('bg-gray-100', 'dark:bg-slate-800', 'text-gray-700', 'dark:text-gray-300');

            const targetTrack = btn.getAttribute('data-track');
            trackModules.forEach(module => {
                if (targetTrack === 'all' || module.getAttribute('data-track-id') === targetTrack) {
                    module.style.display = 'block';
                } else {
                    module.style.display = 'none';
                }
            });
        });
    });

    // Accordion item expand/collapse
    window.toggleAccordion = function(id) {
        const content = document.getElementById(`acc-content-${id}`);
        const icon = document.getElementById(`acc-icon-${id}`);
        
        if (content) {
            const isHidden = content.classList.contains('hidden');
            if (isHidden) {
                content.classList.remove('hidden');
                if (icon) icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                if (icon) icon.style.transform = 'rotate(0deg)';
            }
        }
    };

    // 5. 8 Real Projects Showcase Modal Data
    const projectDetails = {
        'project-1': {
            title: 'Student Result & Grade Calculator',
            category: 'Python Logic & Automation',
            tags: ['Python 3.x', 'Modular Logic', 'Data Validation', 'File Export'],
            desc: 'A robust Python application that validates marks across subjects, applies boundary condition grading algorithms, calculates standard percentage distributions, and exports student report cards in CSV format.',
            features: [
                'Dynamic input validation and exception handling for negative/string scores',
                'Modular functions for GPA calculations, rank indexing, and pass/fail thresholds',
                'Automated batch report card generation exported directly to structured CSV/TXT files',
                'Console dashboard with high score alerts and subject averages'
            ],
            metrics: 'Eliminates 100% manual calculation errors across 1,000+ student batches.'
        },
        'project-2': {
            title: 'Attendance Management & Warning System',
            category: 'Python Automation & File I/O',
            tags: ['Python', 'File Handling', 'Date-Time Logic', 'Automated Warnings'],
            desc: 'An automated attendance tracker built for colleges and training institutes. It reads daily logs, calculates monthly absenteeism, flags low-attendance warnings under 75%, and generates monthly registers.',
            features: [
                'Automated CSV log ingestion and duplicate entry de-duplication',
                'Calculation of real-time attendance percentage per student per subject',
                'Automated warning list generator for students below 75% cutoff threshold',
                'Monthly executive attendance matrix export for academic deans'
            ],
            metrics: 'Automates 40+ hours of manual faculty attendance compilation per month.'
        },
        'project-3': {
            title: 'Corporate Sales Report & Executive Dashboard',
            category: 'Advanced Microsoft Excel & BI',
            tags: ['Excel', 'XLOOKUP', 'Pivot Tables', 'Interactive Slicers', 'KPI Modeling'],
            desc: 'Consolidates multi-region retail sales feeds into an executive-ready dashboard with dynamic XLOOKUP formulas, INDEX-MATCH lookups, Pivot tables, and interactive slicers for C-suite decision making.',
            features: [
                'Dynamic multi-condition XLOOKUP & nested logical formulas (SUMIFS, COUNTIFS)',
                'Interactive Pivot tables with linked date/region slicers and timeline controls',
                'YoY revenue growth calculation and profit margin heatmapping',
                'Executive visual summary with automated conditional formatting alerts'
            ],
            metrics: 'Provides real-time visibility across ₹5+ Crores retail transactional revenue.'
        },
        'project-4': {
            title: 'Employee Data & Churn Analysis (5,000+ Records)',
            category: 'Pandas Data Wrangling & Analytics',
            tags: ['Pandas', 'NumPy', 'Data Cleaning', 'Attrition Study', 'Jupyter'],
            desc: 'An in-depth analysis of 5,000+ employee records using Pandas and NumPy to uncover department-wise turnover rates, tenure trends, and compensation discrepancies leading to employee attrition.',
            features: [
                'Handling missing, inconsistent, and duplicate data records using Pandas',
                'Multi-level GroupBy aggregations across department, tenure, and salary bands',
                'Correlation matrix calculating attrition risk vs promotion timeline',
                'Jupyter Notebook storytelling report ready for HR Director review'
            ],
            metrics: 'Identified top 3 actionable factors causing 68% of tech department turnover.'
        },
        'project-5': {
            title: 'eCommerce Multi-Store Sales Velocity Analysis',
            category: 'Data Analytics & Transactional Insights',
            tags: ['Python', 'Pandas', 'Time-Series', 'Cart Value Optimization'],
            desc: 'End-to-end transactional analysis on eCommerce orders. Cleans messy CSV order feeds, computes monthly sales velocity, calculates Average Order Value (AOV), and identifies peak seasonal buying hours.',
            features: [
                'Time-series order date decomposition (Day, Week, Hour of purchase)',
                'Customer segmentation by order frequency and repeat purchase rate',
                'Identification of top 10 revenue-generating product SKUs vs slow-moving inventory',
                'Automated discount coupon impact evaluation on total gross profit'
            ],
            metrics: 'Discovered peak 8 PM - 11 PM shopping window generating 42% of total daily revenue.'
        },
        'project-6': {
            title: 'Business Performance & KPI Dashboard',
            category: 'Data Visualization & Storytelling',
            tags: ['Matplotlib', 'Seaborn', 'Heatmaps', 'Executive Viz', 'Plotly'],
            desc: 'Transforms complex multi-dimensional tables into visual executive narratives. Includes revenue trend lines, product category share, customer lifetime value distributions, and regional performance heatmaps.',
            features: [
                'Subplot grid layout combining 6 distinct corporate KPI visual metrics',
                'Seaborn correlation heatmaps and boxplots for outlier identification',
                'Custom business color palettes optimized for presentation clarity',
                'High-resolution vector visual export for annual boardroom reports'
            ],
            metrics: 'Standardized visualization deck adopted across multi-store management.'
        },
        'project-7': {
            title: 'Relational Database Query Engine',
            category: 'SQL Databases & Complex Querying',
            tags: ['SQL', 'INNER / LEFT JOINs', 'Window Functions', 'Subqueries', 'Views'],
            desc: 'Architects and queries a multi-table enterprise relational database. Writes complex queries with multi-table joins, subqueries, and window functions to extract precise departmental analytics.',
            features: [
                'Database schema design with primary, foreign keys and relational integrity',
                'Complex multi-table INNER, LEFT, and RIGHT joins with aggregation functions',
                'Nested subqueries, CTEs (Common Table Expressions), and Database Views',
                'Query execution plan optimization for sub-second responses on large tables'
            ],
            metrics: 'Handles queries across 5 interconnected tables with 50,000+ transactional rows.'
        },
        'project-8': {
            title: 'Full-Stack Capstone: Business Intelligence & AI Assistant',
            category: 'Comprehensive Capstone & Modern AI',
            tags: ['Full Stack', 'Python', 'SQL', 'Pandas', 'AI Tools', 'Agentic AI'],
            desc: 'The master graduation capstone integrating raw data ingestion, AI-assisted anomaly correction, SQL relational storage, Pandas aggregation, and an interactive executive business intelligence presentation.',
            features: [
                'Automated pipeline: CSV raw ingestion $\\rightarrow$ Python cleaning $\\rightarrow$ SQL storage',
                'AI-assisted prompt workflows for automated summary generation and insight drafting',
                'Complete visual dashboard presentation with actionable corporate recommendations',
                'Published live on GitHub with complete documentation, architecture diagram, and data dictionary'
            ],
            metrics: '100% comprehensive portfolio proof demonstrated directly in interviews.'
        }
    };

    window.openProjectModal = function(projectId) {
        const modal = document.getElementById('project-modal');
        const data = projectDetails[projectId];
        if (!modal || !data) return;

        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-category').innerText = data.category;
        document.getElementById('modal-desc').innerText = data.desc;
        document.getElementById('modal-metrics').innerText = data.metrics;

        const tagsContainer = document.getElementById('modal-tags');
        tagsContainer.innerHTML = data.tags.map(t => 
            `<span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">${t}</span>`
        ).join('');

        const featuresContainer = document.getElementById('modal-features');
        featuresContainer.innerHTML = data.features.map(f => 
            `<li class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <svg class="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>${f}</span>
            </li>`
        ).join('');

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    window.closeProjectModal = function() {
        const modal = document.getElementById('project-modal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    };

    // 6. EMI & Fee Calculator
    const trackSelect = document.getElementById('calc-track');
    const tenureSelect = document.getElementById('calc-tenure');
    const emiResult = document.getElementById('emi-result');
    const totalFeeResult = document.getElementById('total-fee-result');
    const monthlyBreakdown = document.getElementById('monthly-breakdown');

    function calculateEMI() {
        if (!trackSelect || !tenureSelect || !emiResult) return;
        const totalFee = parseInt(trackSelect.value, 10);
        const months = parseInt(tenureSelect.value, 10);
        
        const emi = Math.round(totalFee / months);
        emiResult.innerText = `₹${emi.toLocaleString('en-IN')}`;
        totalFeeResult.innerText = `₹${totalFee.toLocaleString('en-IN')}`;
        if (monthlyBreakdown) {
            monthlyBreakdown.innerText = `0% interest EMI for ${months} months`;
        }
    }

    if (trackSelect) trackSelect.addEventListener('change', calculateEMI);
    if (tenureSelect) tenureSelect.addEventListener('change', calculateEMI);
    calculateEMI();

    // 7. Toast Notification Utility
    window.showToast = function(message) {
        const toast = document.getElementById('toast-notification');
        const toastMessage = document.getElementById('toast-message');
        if (!toast || !toastMessage) return;

        toastMessage.innerText = message;
        toast.classList.remove('translate-y-24', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');

        setTimeout(() => {
            toast.classList.remove('translate-y-0', 'opacity-100');
            toast.classList.add('translate-y-24', 'opacity-0');
        }, 4000);
    };

    // 8. Lead Capture Form Submission Handler
    const leadForms = document.querySelectorAll('.lead-capture-form');
    leadForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.disabled = true;
            btn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Reserving Seat...`;

            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = originalText;
                form.reset();
                showToast('🎉 Mubarak! Your Free Demo Session at Morph Meta Academy (Sector 34A Chandigarh) is reserved. Our counselor will call you shortly at 9815489999.');
            }, 1000);
        });
    });

    // 9. Demo Booking Modal
    window.openDemoModal = function() {
        const demoModal = document.getElementById('demo-modal');
        if (demoModal) {
            demoModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeDemoModal = function() {
        const demoModal = document.getElementById('demo-modal');
        if (demoModal) {
            demoModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    };

    // Close Modals on clicking outside content area
    const projectModal = document.getElementById('project-modal');
    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }

    const demoModal = document.getElementById('demo-modal');
    if (demoModal) {
        demoModal.addEventListener('click', (e) => {
            if (e.target === demoModal) {
                closeDemoModal();
            }
        });
    }
});
