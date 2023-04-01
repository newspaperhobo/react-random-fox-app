const Button = ({ handleGetFoxPicture }) => {
  return (
    <button
      onClick={() => {
        handleGetFoxPicture();
      }}
    >
      Find your Fox
    </button>
  );
};

export default Button;
