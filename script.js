$(document).ready(function () {
    let taskCount = 0;

    //Function to add task
    $('#task-form').submit(function (event) {
        event.preventDefault();

        const taskName = $('#task-name').val().trim();
        const taskDesc = $('#task-desc').val().trim();

        //Validation
        if (taskName === "" || taskDesc === "") {
            alert("Both task name and description are required!");
            return;
        }

        taskCount++;
        const taskRow = `
            <tr>
                <td>${taskCount}</td>
                <td>${taskName}</td>
                <td>${taskDesc}</td>
                <td><button class="delete-task">Delete</button></td>
            </tr>
        `;

        //Append task
        $('#task-table tbody').append(taskRow);

        //Clear input fields
        $('#task-name').val('');
        $('#task-desc').val('');
    });

    //Task Deletion
    $('#task-table').on('click', '.delete-task', function () {
        if (confirm("Are you sure you want to delete this task?")) {
            $(this).closest('tr').remove();
            updateTaskNumbers();
            alert("Task deleted!");
        }
    });

    //Update task numbers function
    function updateTaskNumbers() {
        taskCount = 0;
        $('#task-table tbody tr').each(function () {
            taskCount++;
            $(this).find('td:first').text(taskCount);
        });
    }
});
