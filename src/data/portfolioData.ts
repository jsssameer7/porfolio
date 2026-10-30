import { Project, SkillCategory, AcademicMilestone } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Shaik Sameer',
  role: 'B.Tech AIML Student & Aspiring Software Developer',
  institution: 'REVA University, Bengaluru',
  email: 'jsseng.shameer@gmail.com',
  github: 'https://github.com/jsssameer7',
  githubUsername: 'jsssameer7',
  tagline: 'Pursuing B.Tech in AIML at REVA University, Bengaluru. Passionate about AI-integrated software, modern web development, and real-world applications.',
  objective:
    'To become a professional software engineer by strengthening programming fundamentals, developing real-world applications, and continuously learning modern technologies. I believe in learning by building, improving through practice, and using technology to solve meaningful problems.',
  location: 'Bengaluru, India',
  education: 'B.Tech in Artificial Intelligence & Machine Learning (AIML)',
};

export const PROJECTS: Project[] = [
  {
    id: 'academic-management-system',
    title: 'Academic Management System (AMS)',
    subtitle: 'College syllabus and academic progress tracking platform',
    category: 'System',
    description:
      'A comprehensive Academic Management System designed to help colleges track syllabus completion, monitor subject-wise academic milestones, and organize institutional curriculum data efficiently.',
    fullDescription:
      'The Academic Management System (AMS) addresses the challenge colleges and technical institutions face in maintaining consistent curriculum velocity. Built with modern full-stack development patterns and React.js, AMS provides academic coordinators, department heads, and students with transparent, real-time views into subject progress, upcoming unit completion deadlines, and aggregate departmental progress charts.',
    image: '/src/assets/images/project_ams_1793341594176.jpg',
    keyFeatures: [
      'Track academic syllabus completion across multiple semesters and subjects',
      'Monitor subject-wise academic progress with visual milestone indicators',
      'Help organize and manage course modules, faculty assignments, and syllabus archives',
      'Calculate weighted curriculum completion percentages per department',
    ],
    technologies: ['HTML5', 'React.js', 'JavaScript (ES6+)', 'Full Stack Development (FSD)', 'Tailwind CSS'],
    status: 'In Development',
    githubUrl: 'https://github.com/jsssameer7',
    highlights: [
      'Modular course syllabus architecture',
      'Real-time percentage progress computation',
      'Role-based views for coordinators and students',
    ],
    architectureNotes:
      'State-driven modular architecture dividing academic curriculum into structured semesters, courses, units, and verification checkpoints with persistent state management.',
  },
  {
    id: 'ecommerce-shopping',
    title: 'E-Commerce Shopping Website',
    subtitle: 'User-friendly online shopping interface and digital catalog',
    category: 'E-Commerce',
    description:
      'A sleek, responsive e-commerce web platform engineered with React.js demonstrating online shopping workflows, product presentation, cart management, and fluid customer interactions.',
    fullDescription:
      'Engineered to showcase modern frontend web practices, this e-commerce platform provides an intuitive shopping journey. It features responsive grid-based product presentation, dynamic category filtering, smooth cart state synchronization, and checkout-ready interfaces optimized across mobile and desktop viewports.',
    image: '/src/assets/images/project_ecommerce_1793341594597.jpg',
    keyFeatures: [
      'User-friendly shopping interface with crisp product presentation',
      'Responsive web design adapting seamlessly from smartphones to ultra-wide displays',
      'Dynamic product catalog with instant price and category filtering',
      'Interactive shopping cart drawer with quantity calculation and order summary',
    ],
    technologies: ['HTML5', 'React.js', 'CSS3 / Tailwind', 'JavaScript'],
    liveDemoUrl: 'https://jsssameer7.github.io/E-commerce/',
    githubUrl: 'https://github.com/jsssameer7/E-commerce',
    status: 'Live Demo',
    highlights: [
      '100% responsive fluid mobile layout',
      'Client-side cart state persistence',
      'Instant search and tag filters',
    ],
  },
  {
    id: 'farmer-support',
    title: 'Farmer Support Website',
    subtitle: 'Agricultural intelligence, seasonal guidance, and seed market rates',
    category: 'Agriculture',
    description:
      'A farmer-focused agricultural intelligence platform built to provide essential weather guidance, seasonal seed selection advisories, and transparent seed pricing to empower agrarian communities.',
    fullDescription:
      'Designed to bridge the information gap in rural agriculture, the Farmer Support Platform centralizes vital crop planning resources. Farmers can check seasonal weather parameters, discover high-yield seed varieties suited for specific soil conditions, and verify regional market rates to make informed purchasing and sowing decisions.',
    image: '/src/assets/images/project_farmer_support_1793341595286.jpg',
    keyFeatures: [
      'Weather guidance tailored for critical farming phases and sowing periods',
      'Detailed information about seed varieties and recommended cultivation seasons',
      'Transparent seed market price information to help farmers budget and prevent overpaying',
      'Regional planting calendars categorized by Kharif, Rabi, and Zaid seasons',
    ],
    technologies: ['HTML5', 'React.js', 'JavaScript', 'CSS3', 'Agri-Data Schema'],
    liveDemoUrl: 'https://jsssameer7.github.io/Agriculture/',
    githubUrl: 'https://github.com/jsssameer7/Agriculture',
    status: 'Live Demo',
    highlights: [
      'Seasonal crop planning advisory',
      'Seed pricing transparency directory',
      'Accessible high-contrast UI for outdoor readability',
    ],
  },
  {
    id: 'electronic-product-comparison',
    title: 'Electronic Product Comparison Website',
    subtitle: 'Interactive hardware specification differential and comparison matrix',
    category: 'Comparison',
    description:
      'A web platform designed to help consumers evaluate electronic devices by providing side-by-side technical specification comparisons, benchmark highlights, and value assessments.',
    fullDescription:
      'Shopping for consumer electronics often overwhelms users with conflicting spec sheets. This product comparison engine allows users to select gadgets across phones, audio gear, and laptops, placing their processors, display specs, battery capacities, and pricing into a clean, normalized differential matrix.',
    image: '/src/assets/images/project_electronics_compare_1793341595397.jpg',
    keyFeatures: [
      'Explore and compare consumer electronic products side-by-side',
      'Interactive differential matrix highlighting key specification advantages',
      'Clean search and filter interface for discovering electronics across categories',
      'Dynamic specification scoring and value-for-money breakdown',
    ],
    technologies: ['HTML5', 'React.js', 'JavaScript', 'Tailwind CSS'],
    liveDemoUrl: 'https://jsssameer7.github.io/E-commerce-Product/',
    githubUrl: 'https://github.com/jsssameer7/E-commerce-Product',
    status: 'Live Demo',
    highlights: [
      'Side-by-side specification alignment',
      'Multi-device comparison slot architecture',
      'Responsive tabular layout on mobile screens',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 'Intermediate',
        yearsOrProjects: 'Core Language',
        description:
          'Object-oriented programming, data structures, algorithm problem solving, scripting, and backend logic development.',
        snippet: {
          language: 'python',
          code: `# Python - Academic Progress Analyzer
class AcademicProgress:
    def __init__(self, subject_name: str, total_units: int):
        self.subject_name = subject_name
        self.total_units = total_units
        self.completed_units = 0

    def mark_completed(self, units: int) -> float:
        self.completed_units = min(self.total_units, self.completed_units + units)
        ratio = (self.completed_units / self.total_units) * 100
        return round(ratio, 1)

# Initialize subject tracker
ams_cs = AcademicProgress("Data Structures & Algorithms", 5)
print(f"Status: {ams_cs.mark_completed(3)}% syllabus complete")`,
        },
      },
      {
        name: 'Java',
        level: 'Intermediate',
        yearsOrProjects: 'Core Language',
        description:
          'Object-oriented system modeling, class hierarchies, interfaces, exception handling, and robust memory-safe algorithms.',
        snippet: {
          language: 'java',
          code: `// Java - Seed Pricing Engine for Farmer Support
public class SeedMarket {
    private String cropName;
    private double basePricePerKg;

    public SeedMarket(String crop, double price) {
        this.cropName = crop;
        this.basePricePerKg = price;
    }

    public double calculateSubsidyPrice(double discountRate) {
        return this.basePricePerKg * (1.0 - discountRate);
    }
}`,
        },
      },
      {
        name: 'C',
        level: 'Foundational',
        yearsOrProjects: 'Core Language',
        description:
          'Structured programming, pointer arithmetic, memory management, and fundamental data structure implementations.',
        snippet: {
          language: 'c',
          code: `/* C - Linear Search & Array Bounds */
#include <stdio.h>

int findProductIndex(int productIds[], int length, int targetId) {
    for (int i = 0; i < length; i++) {
        if (productIds[i] == targetId) {
            return i; // Found matching product index
        }
    }
    return -1; // Not present
}`,
        },
      },
    ],
  },
  {
    category: 'Web Development',
    skills: [
      {
        name: 'React.js',
        level: 'Proficient',
        yearsOrProjects: 'Primary Frontend Library',
        description:
          'Functional components, custom hooks, reactive state workflows, props decomposition, and modular component libraries.',
        snippet: {
          language: 'typescript',
          code: `// React.js - Component State Hook
import { useState, useMemo } from 'react';

export function SyllabusTracker({ totalModules, completedCount }) {
  const percentage = useMemo(() => {
    return Math.round((completedCount / totalModules) * 100);
  }, [totalModules, completedCount]);

  return (
    <div className="syllabus-progress">
      <div className="progress-bar" style={{ width: \`\${percentage}%\` }} />
      <span>{percentage}% Completed</span>
    </div>
  );
}`,
        },
      },
      {
        name: 'JavaScript (ES6+)',
        level: 'Proficient',
        yearsOrProjects: 'Core Web Technology',
        description:
          'Modern asynchronous JavaScript, Promises, array manipulations (map/filter/reduce), DOM APIs, and modular ES modules.',
      },
      {
        name: 'HTML5 & Modern CSS3',
        level: 'Proficient',
        yearsOrProjects: 'Core Web Technology',
        description:
          'Semantic markup, accessibility landmarks, CSS Flexbox & CSS Grid systems, custom properties, and Tailwind utility systems.',
      },
      {
        name: 'Full Stack Principles',
        level: 'Active Practice',
        yearsOrProjects: 'Architecture',
        description:
          'Client-server separation, RESTful API data flows, JSON payload contracts, and database integration workflows.',
      },
    ],
  },
  {
    category: 'Software Engineering Competencies',
    skills: [
      {
        name: 'Responsive Web Design',
        level: 'Proficient',
        yearsOrProjects: 'All Projects',
        description:
          'Mobile-first layout design, fluid typography, touch targets, and viewport testing across smartphone, tablet, and desktop.',
      },
      {
        name: 'Problem Solving & Algorithms',
        level: 'Active Practice',
        yearsOrProjects: 'Computer Science Core',
        description:
          'Algorithm optimization, recursion, sorting and searching techniques, time/space complexity analysis.',
      },
      {
        name: 'Version Control (Git & GitHub)',
        level: 'Proficient',
        yearsOrProjects: 'Daily Workflow',
        description:
          'Branch management, pull requests, conventional commits, GitHub Pages deployment, and open-source collaboration.',
      },
      {
        name: 'UI/UX Craft & Accessibility',
        level: 'Proficient',
        yearsOrProjects: 'Design Standards',
        description:
          'Clean typographic hierarchy, WCAG contrast standards, keyboard navigation, and zero-clutter layout execution.',
      },
    ],
  },
];

export const EDUCATION_MILESTONES: AcademicMilestone[] = [
  {
    period: 'Currently Pursuing',
    degree: 'B.Tech in Artificial Intelligence & Machine Learning (AIML)',
    institution: 'REVA University, Bengaluru',
    description:
      'Undergraduate engineering degree program at REVA University, Bengaluru, focusing on Artificial Intelligence, Machine Learning algorithms, Data Structures, Modern Web Application Development, and Scalable Software Systems.',
    focusAreas: [
      'Artificial Intelligence & Machine Learning Foundations',
      'Data Structures & Algorithm Optimization',
      'Object-Oriented Programming (Python, Java, C)',
      'Modern Web Engineering & Full Stack React.js Architecture',
      'Database Management Systems & Computational Mathematics',
    ],
  },
];
