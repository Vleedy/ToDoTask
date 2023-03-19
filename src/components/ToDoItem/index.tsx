import React from 'react';
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import styles from './ToDoItem.module.scss';

import { useAppDispatch } from '../../hooks/redux';
import { deleteToDo, editToDo } from '../../redux/slices/ToDoSlice';

interface ToDoItemProps {
  description: string;
  date: number;
  i: number;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ description, date, i }) => {
  const [editing, setEditing] = React.useState(false);
  const [value, setValue] = React.useState(description);
  const dispatch = useAppDispatch();

  const saveChanges = () => {
    dispatch(editToDo({ i: i, text: value }));
    setEditing(false);
  };
  const undoChanges = () => {
    setEditing(false);
    setValue(description);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          className={styles.description}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!editing}
        />
        <h6 className={styles.date}>{new Date(date).toLocaleDateString()}</h6>
      </div>
      <div className={styles.wrapper}>
        {editing ? (
          <>
            <button onClick={saveChanges} title="Сохранить изменения">
              <CheckOutlined className={styles.icon} />
            </button>
            <button onClick={undoChanges} title="Отменить изменения">
              <CloseOutlined className={styles.icon} />
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setEditing(true)} title="Редактировать описание">
              <EditOutlined className={styles.icon} />
            </button>
            <button onClick={() => dispatch(deleteToDo(i))} title="Удалить">
              <DeleteOutlined className={styles.icon} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ToDoItem;
