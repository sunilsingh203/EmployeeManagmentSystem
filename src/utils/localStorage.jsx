const employees = [
  {
    id: 1,
    firstname: "Aarav",
    password: "123",
    email: "e@e.com",
    taskCount: {
      active: 1,
      newTask: 1,
      completedTask: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completedTask: false,
        failed: false,
        title: "Design homepage layout",
        description: "Create a responsive layout for homepage",
        date: "2025-06-15",
        category: "design"
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failed: false,
        title: "Fix login bug",
        description: "Resolve issue with login not redirecting",
        date: "2025-06-12",
        category: "development"
      },
      {
        active: false,
        newTask: false,
        completedTask: false,
        failed: true,
        title: "Deploy staging site",
        description: "Push current build to staging environment",
        date: "2025-06-10",
        category: "devops"
      }
    ]
  },
  {
    id: 2,
    firstname: "Priya",
    password: "123",
    email: "e2@e.com",
    taskCount: {
      active: 1,
      newTask: 1,
      completedTask: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completedTask: false,
        failed: false,
        title: "Write test cases",
        description: "Add unit tests for user service",
        date: "2025-06-16",
        category: "testing"
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failed: false,
        title: "Update README",
        description: "Add project setup instructions",
        date: "2025-06-11",
        category: "documentation"
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failed: false,
        title: "Fix logout issue",
        description: "Ensure session clears properly on logout",
        date: "2025-06-09",
        category: "development"
      },
      {
        active: false,
        newTask: false,
        completedTask: false,
        failed: true,
        title: "Database migration",
        description: "Move schema to v2 with new constraints",
        date: "2025-06-07",
        category: "database"
      }
    ]
  },
  {
    id: 3,
    firstname: "Rahul",
    password: "123",
    email: "employee3@example.com",
    taskCount: {
      active: 1,
      newTask: 0,
      completedTask: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completedTask: false,
        failed: false,
        title: "Conduct code review",
        description: "Review PRs assigned in GitHub",
        date: "2025-06-16",
        category: "review"
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failed: false,
        title: "Add search feature",
        description: "Implement basic search in header",
        date: "2025-06-13",
        category: "development"
      },
      {
        active: false,
        newTask: false,
        completedTask: false,
        failed: true,
        title: "Integrate payment gateway",
        description: "Failed due to sandbox issues",
        date: "2025-06-10",
        category: "payment"
      }
    ]
  },
  {
    id: 4,
    firstname: "Sneha",
    password: "123",
    email: "employee4@example.com",
    taskCount: {
      active: 1,
      newTask: 1,
      completedTask: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completedTask: false,
        failed: false,
        title: "SEO optimization",
        description: "Optimize meta tags and page speed",
        date: "2025-06-16",
        category: "marketing"
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failed: false,
        title: "User survey analysis",
        description: "Compile survey feedback into report",
        date: "2025-06-12",
        category: "analytics"
      },
      {
        active: false,
        newTask: false,
        completedTask: false,
        failed: true,
        title: "Newsletter setup",
        description: "Setup failed due to email API error",
        date: "2025-06-11",
        category: "communication"
      }
    ]
  },
  {
    id: 5,
    firstname: "Vikram",
    password: "123",
    email: "employee5@example.com",
    taskCount: {
      active: 1,
      newTask: 1,
      completedTask: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completedTask: false,
        failed: false,
        title: "Backend performance tuning",
        description: "Improve database indexing and queries",
        date: "2025-06-16",
        category: "backend"
      },
      {
        active: false,
        newTask: true,
        completedTask: false,
        failed: false,
        title: "Refactor auth middleware",
        description: "Clean and document auth module",
        date: "2025-06-15",
        category: "security"
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failed: false,
        title: "Dockerize app",
        description: "Containerize frontend and backend",
        date: "2025-06-10",
        category: "devops"
      },
      {
        active: false,
        newTask: false,
        completedTask: false,
        failed: true,
        title: "Set up CI/CD pipeline",
        description: "Build failed during deployment stage",
        date: "2025-06-08",
        category: "automation"
      }
    ]
  }
];

const admin = [
  {
    id: 100,
    firstname: "Admin",
    password: "123",
    email: "admin@example.com"
  }
];


export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
    
}