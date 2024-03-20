export function DeleteAllToDo ({settodolist}) {


    function deleteAllToDo () {
        localStorage.removeItem("list")
        settodolist([])
    }

    return <button onClick={deleteAllToDo}>Delete</button>
}