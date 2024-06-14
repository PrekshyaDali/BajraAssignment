
document.addEventListener("DOMContentLoaded", function () {
    try {
        const container = document.getElementById('assignments-container');
        if (!container) {
            throw new Error('#assignments-container not found');
        }

        const assignmentsData = [
            {
                title: "Shell Scripting",
                description: "I delved into Linux, spending 5 hours connecting to a friend's computer via SSH for a Shell Script Assignment. Additionally, I dedicated 3 hours to mastering Git, understanding Version Control Systems (VCS), Git concepts, and configuring SSH keys for GitLab.",
                img: "./public/img/ShellScripting.png",
                link: "https://docs.google.com/document/d/1vz22URurg8xa_s_mJkqfensEePqbP1acs7UAUgx8kf8/edit?usp=sharing",
                linkText: "Read More",
                githublink: "",
            },
            {
                title: "Assignment Static Page",
                description: "On Day 3 of my traineeship, I delved into the fundamentals of Git and its basic commands. Starting with the installation of Git, I proceeded to configure it using git config and initialized a new repository. I learned how to checkout an existing repository, add and commit changes, and check the status of my repository using git status.",
                img: "./public/img/AssignmentPicBajra.png",
                link: "https://prekshyadali.github.io/BajraAssignment/",
                linkText: "Visit Site",
                githublink: "https://github.com/PrekshyaDali/BajraAssignment",
            },
            {
                title: "Figma Design Assignment",
                description: "Shell scripting is the art of writing scripts for a shell, a command-line interpreter that provides a user interface for accessing the operating system's services. The shell acts as an interface between the user and the kernel (the core of the operating system). It interprets user commands, launches programs, and handles file management tasks.",
                img: "./public/img/DesignAssignment .png",
                link: "http://prekshya.pages.bajratechnologies.com/bajra_design_assignment/",
                linkText: "Visit Site",
                githublink: "https://git.bajratechnologies.com/Prekshya/bajra_design_assignment",
            },
            {
                title: "Demo",
                description: "Shell scripting is the art of writing scripts for a shell, a command-line interpreter that provides a user interface for accessing the operating system's services. The shell acts as an interface between the user and the kernel (the core of the operating system). It interprets user commands, launches programs, and handles file management tasks.",
                img: "./public/img/assignmentpic.jpg",
                link: "https://github.com/PrekshyaDali/Bajra_AssignmentPage",
                linkText: "Visit Site",
                githublink: "",
            },
            {
                title: "Demo",
                description: "Shell scripting is the art of writing scripts for a shell, a command-line interpreter that provides a user interface for accessing the operating system's services. The shell acts as an interface between the user and the kernel (the core of the operating system). It interprets user commands, launches programs, and handles file management tasks.",
                img: "./public/img/assignmentpic.jpg",
                link: "https://github.com/PrekshyaDali/Bajra_AssignmentPage",
                linkText: "Read More",
                githublink: "",
            }
        ];

        const htmlElements = assignmentsData.map(assignment => {
            const section = document.createElement('section');
            section.className = 'border-2 p-2 sm:p-5 rounded-md flex flex-col space-y-5 max-w-md w-fit shadow-lg hover:ease-in-out';
            section.innerHTML = `
        <div class="h-56">
          <img class="object-cover h-full w-full" src="${assignment.img}" alt="${assignment.title}">
        </div>
        <div class="flex flex-col space-y-3 items-center">
          <h1 class="text-2xl font-semibold">${assignment.title}</h1>
          <p class="line-clamp-3">${assignment.description}</p>
        </div>
        <div class="flex justify-end space-x-5">
            <a href="${assignment.githublink}" target="_blank" class="bg-red-900 text-white px-6 py-2 rounded-md">Git</a>
          <a href="${assignment.link}" target="_blank" class="bg-red-900 text-white px-6 py-2 rounded-md">${assignment.linkText}</a>
        </div>
      `;
            return section;
        });

        htmlElements.forEach(element => {
            container?.appendChild(element);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
});
