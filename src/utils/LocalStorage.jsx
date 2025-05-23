
const Employees = [
    {
        id: 1,
        firstName: "Rajesh Kumar",
        email: "employee1@example.com",
        password: "12345",
        taskCount: {
            active: 2,
            newTask: 2,
            completed: 1,
            failed: 0
        },
        tasks: [
            {
                taskTitle: "Design Homepage",
                taskDescription: "Create the main landing page UI",
                taskDate: "2025-05-20",
                category: "Design",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Fix navbar bug",
                taskDescription: "Resolve alignment issues in mobile view",
                taskDate: "2025-05-22",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Write unit tests",
                taskDescription: "Add unit tests for login module",
                taskDate: "2025-05-25",
                category: "Testing",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 2,
        firstName: "Sneha Reddy",
        email: "employee2@example.com",
        password: "12345",
        taskCount: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                taskTitle: "Build Contact Page",
                taskDescription: "Develop the contact form with validation",
                taskDate: "2025-05-21",
                category: "Development",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Optimize images",
                taskDescription: "Compress and replace high-res images",
                taskDate: "2025-05-23",
                category: "Optimization",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Review pull requests",
                taskDescription: "Code review for junior developers",
                taskDate: "2025-05-26",
                category: "Code Review",
                active: false,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Fix login redirect",
                taskDescription: "Correct the redirect issue after login",
                taskDate: "2025-05-19",
                category: "Bug Fix",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: 3,
        firstName: "Amit Sharma",
        email: "employee3@example.com",
        password: "12345",
        taskCount: {
            active: 1,
            newTask: 2,
            completed: 1,
            failed: 0
        },
        tasks: [
            {
                taskTitle: "Update readme",
                taskDescription: "Add latest setup instructions",
                taskDate: "2025-05-18",
                category: "Documentation",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Test user dashboard",
                taskDescription: "Perform UI/UX testing on dashboard",
                taskDate: "2025-05-24",
                category: "Testing",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Refactor styles",
                taskDescription: "Move inline styles to CSS modules",
                taskDate: "2025-05-27",
                category: "Refactoring",
                active: false,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 4,
        firstName: "Divya Patel",
        email: "employee4@example.com",
        password: "12345",
        taskCount: {
            active: 2,
            newTask: 2,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                taskTitle: "Create registration page",
                taskDescription: "Include form validation and API hook",
                taskDate: "2025-05-21",
                category: "Frontend",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Integrate Auth",
                taskDescription: "OAuth setup with Google Sign-In",
                taskDate: "2025-05-22",
                category: "Integration",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Analyze performance",
                taskDescription: "Use Lighthouse to generate performance reports",
                taskDate: "2025-05-24",
                category: "Performance",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                taskTitle: "Setup CI/CD",
                taskDescription: "Configure GitHub Actions for deployment",
                taskDate: "2025-05-28",
                category: "DevOps",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 5,
        firstName: "Kiran Joshi",
        email: "employee5@example.com",
        password: "12345",
        taskCount: {
            active: 2,
            newTask: 2,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                taskTitle: "Audit security",
                taskDescription: "Check for XSS & CSRF vulnerabilities",
                taskDate: "2025-05-19",
                category: "Security",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Fix deployment error",
                taskDescription: "Resolve 500 error after pushing to production",
                taskDate: "2025-05-22",
                category: "Bug Fix",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Improve accessibility",
                taskDescription: "Fix contrast and ARIA label issues",
                taskDate: "2025-05-23",
                category: "UX",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Run end-to-end tests",
                taskDescription: "Use Cypress to automate test flows",
                taskDate: "2025-05-26",
                category: "Testing",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                taskTitle: "Prepare sprint report",
                taskDescription: "Summarize completed vs pending tasks",
                taskDate: "2025-05-27",
                category: "Reporting",
                active: false,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    }
];

const Admin = [
    {
        id: 1,
        firstName: "Kiran Joshi",
        email: "admin@example.com",
        password: "12345"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(Employees));
    localStorage.setItem('admin', JSON.stringify(Admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return { admin, employees };
};
