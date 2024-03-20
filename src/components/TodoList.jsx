export function TodoList({todolist}) {
  return (
    <ul>
        {todolist.map((todo, i) => {
            return <li key={i}>{todo}</li>;
        })}
    </ul>
  );
}
