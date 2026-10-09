export const projectDetails = [
  {
    id: 'project-1',
    num: '01',
    title: 'Student Result & Grade Calculator',
    category: 'Python Logic & Automation',
    color: 'brand',
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
  {
    id: 'project-2',
    num: '02',
    title: 'Attendance Management & Warning System',
    category: 'Python Automation & File I/O',
    color: 'purple',
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
  {
    id: 'project-3',
    num: '03',
    title: 'Corporate Sales Report & Executive Dashboard',
    category: 'Advanced Microsoft Excel & BI',
    color: 'emerald',
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
  {
    id: 'project-4',
    num: '04',
    title: 'Employee Data & Churn Analysis (5,000+ Records)',
    category: 'Pandas Data Wrangling & Analytics',
    color: 'pink',
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
  {
    id: 'project-5',
    num: '05',
    title: 'eCommerce Multi-Store Sales Velocity Analysis',
    category: 'Data Analytics & Transactional Insights',
    color: 'amber',
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
  {
    id: 'project-6',
    num: '06',
    title: 'Business Performance & KPI Dashboard',
    category: 'Data Visualization & Storytelling',
    color: 'indigo',
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
  {
    id: 'project-7',
    num: '07',
    title: 'Relational Database Query Engine',
    category: 'SQL Databases & Complex Querying',
    color: 'cyan',
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
  {
    id: 'project-8',
    num: '08',
    title: 'Full-Stack Capstone: Business Intelligence & AI Assistant',
    category: 'Comprehensive Capstone & Modern AI',
    color: 'brand',
    isMaster: true,
    tags: ['Full Stack', 'Python', 'SQL', 'Pandas', 'AI Tools', 'Agentic AI'],
    desc: 'The master graduation capstone integrating raw data ingestion, AI-assisted anomaly correction, SQL relational storage, Pandas aggregation, and an interactive executive business intelligence presentation.',
    features: [
      'Automated pipeline: CSV raw ingestion → Python cleaning → SQL storage',
      'AI-assisted prompt workflows for automated summary generation and insight drafting',
      'Complete visual dashboard presentation with actionable corporate recommendations',
      'Published live on GitHub with complete documentation, architecture diagram, and data dictionary'
    ],
    metrics: '100% comprehensive portfolio proof demonstrated directly in interviews.'
  }
];

