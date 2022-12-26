type DeleteButtonProps = {
  deleteTodo: () => void;
};

function DeleteButton({ deleteTodo }: DeleteButtonProps) {
  return <button onClick={deleteTodo}>DeleteButton</button>;
}

export default DeleteButton;
