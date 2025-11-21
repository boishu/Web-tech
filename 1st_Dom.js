const form = document.getElementById('student-form');
const input = document.getElementById('student-name');
const studentList = document.getElementById('student-list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = input.value.trim();
    if(name) {
        addStudent(name);
        input.value = '';
    }
});

function addStudent(name) {
    const li = document.createElement('li');
    li.textContent = name;

    
    const delBtn = document.createElement('button');
    delBtn.textContent = '❌';
    delBtn.onclick = () => li.remove();

    li.appendChild(delBtn);
    studentList.appendChild(li);
}
