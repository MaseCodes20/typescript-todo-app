type CompleteButtonProps = {
  toggle: () => void;
  isComplete: boolean;
};

function CompleteButton({ toggle, isComplete }: CompleteButtonProps) {
  return (
    <button
      onClick={toggle}
      className={`${
        isComplete
          ? "border-gray-400 hover:bg-gray-400 text-gray-400"
          : "border-green-700 hover:bg-green-700 text-green-700"
      } border-[1px] hover:text-white text-xs mr-2 rounded-md p-2 font-semibold  bg-white`}
    >
      Complete
    </button>
  );
}

export default CompleteButton;
