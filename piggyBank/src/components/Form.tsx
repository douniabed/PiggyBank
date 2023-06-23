interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="wrapper-input">
        <label>Name</label>
        <input type="text" name="name" />
      </div>
      <div className="wrapper-input">
        <label>Description</label>
        <input type="text" name="description" />
      </div>
      <div className="wrapper-input">
        <label>Price</label>
        <input type="number" name="price" />
      </div>
      <div className="wrapper-input">
        <input type="submit" value="Add expense" className="submit" />
      </div>
    </form>
  );
};

export default Form;
