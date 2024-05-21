document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form data
        const formData = new FormData(contactForm);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Log form data to console
        console.log('Form data:', formDataObject);

        // Simulate a successful form submission
        alert('Form submitted successfully!');
    });

    const projectDetails = {
        intrusion: {
            title: 'Intrusion Detection using ML',
            description: 'Developed an innovative intrusion detection system utilizing ML algorithms.Achieved superior accuracy in identifying and preventing unauthorized access enhancing security measures in diverse environments.<p>This project underscored my proficiency in both hardware integration and advanced data analytics techniques, further highlighting my commitment totechnological innovation in solving real-world challenges.</p>'},
        farming: {
            title: 'Smart Farming',
            description: 'Spearheaded a pioneering Smart Farming initiative leveraging Arduino technology to bolster field security measures.</p><p>Employed Arduino sensors to detect unauthorized access to agricultural land.Implemented a sophisticated system integrating laser lights and audible buzzers to swiftly identify and deter intruders.</p><p>The project showcased my adeptness in combining hardware components with programming expertise to address real-world challenges in agriculture,underscoring my commitment to leveraging technology for sustainable farming practices.</p>'
        },
        amazon: {
            title: 'Amazon Clone Website',
            description: 'Built a clone of Amazon website using HTML, CSS, and JavaScript.'
        }
    };

    window.showProjectDetails = function (projectKey) {
        const modal = document.getElementById('project-details');
        const modalContent = document.getElementById('project-details-content');
        
        modalContent.innerHTML = `<h2>${projectDetails[projectKey].title}</h2><p>${projectDetails[projectKey].description}</p>`;
        modal.style.display = 'block';
    };

    window.closeProjectDetails = function () {
        const modal = document.getElementById('project-details');
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        const modal = document.getElementById('project-details');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
