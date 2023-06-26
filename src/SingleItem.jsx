import { useDeleteTask, useEditTask } from "./reactQueriesAndCustomHooks";

const SingleItem = ({ item }) => {
  
  const {deleteTask, isLoading} = useDeleteTask();
  const {editTask} = useEditTask();
  

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => editTask({taskId: item.id, isDone: !item.isDone})}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        disabled={isLoading}
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
