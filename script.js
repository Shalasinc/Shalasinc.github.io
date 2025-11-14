document.addEventListener('DOMContentLoaded', function() {
    // Login type selection
    const studentBtn = document.getElementById('studentBtn');
    const facultyBtn = document.getElementById('facultyBtn');
    const studentForm = document.getElementById('studentForm');
    const facultyForm = document.getElementById('facultyForm');
    const backFromStudent = document.getElementById('backFromStudent');
    const backFromFaculty = document.getElementById('backFromFaculty');

    if (studentBtn && facultyBtn) {
        // container that holds the two main choice buttons
        const mainChoices = studentBtn.parentElement;

        studentBtn.addEventListener('click', function() {
            // show student form, hide faculty form and main choices
            studentForm.classList.remove('hidden');
            facultyForm.classList.add('hidden');
            if (mainChoices) mainChoices.classList.add('hidden');
            studentForm.style.animation = 'fadeIn 0.3s ease-out forwards';
        });

        facultyBtn.addEventListener('click', function() {
            // show faculty form, hide student form and main choices
            facultyForm.classList.remove('hidden');
            studentForm.classList.add('hidden');
            if (mainChoices) mainChoices.classList.add('hidden');
            facultyForm.style.animation = 'fadeIn 0.3s ease-out forwards';
        });

        if (backFromStudent) {
            backFromStudent.addEventListener('click', function() {
                studentForm.classList.add('hidden');
                if (mainChoices) mainChoices.classList.remove('hidden');
            });
        }

        if (backFromFaculty) {
            backFromFaculty.addEventListener('click', function() {
                facultyForm.classList.add('hidden');
                if (mainChoices) mainChoices.classList.remove('hidden');
            });
        }
    }

    // Form submission handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            console.log('فرم ارسال شد');
        });
    });
});