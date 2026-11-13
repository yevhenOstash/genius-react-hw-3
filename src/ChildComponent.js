function ChildComponent(props) {
  return (
    <div>
      {props.todo.map((element, index) => (
        <p key={element.id}>
          {element.name}
          <button
            onClick={() => {
              props.onDelete(element.id);
            }}
          >
            delete this todo
          </button>
        </p>
      ))}
    </div>
  );
}

export default ChildComponent;
