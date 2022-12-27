type DeleteButtonProps = {
  deleteTodo: () => void;
};

function DeleteButton({ deleteTodo }: DeleteButtonProps) {
  return (
    <button
      onClick={deleteTodo}
      className="border-[1px] hover:bg-red-700 hover:text-white text-xs font-semibold border-red-700 text-red-700 bg-white rounded-md p-2 "
    >
      delete
    </button>
  );
}

export default DeleteButton;
