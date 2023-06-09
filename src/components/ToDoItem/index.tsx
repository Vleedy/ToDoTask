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
  const descriptionRef = React.useRef<HTMLTextAreaElement | null>(null);
  const dispatch = useAppDispatch();

  const saveChanges = () => {
    dispatch(editToDo({ i, text: value }));
    setEditing(false);
  };
  const undoChanges = () => {
    setEditing(false);
    setValue(description);
  };

  React.useEffect(() => descriptionRef.current?.focus(), [editing]);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <textarea
          className={styles.description}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          disabled={!editing}
          ref={descriptionRef}
        />
        <h6 className={styles.date}>{new Date(date).toLocaleDateString()}</h6>
      </div>
      <div className={styles.wrapper}>
        {editing ? (
          <>
            <button
              className={styles.btn}
              disabled={value === ''}
              onClick={saveChanges}
              title={value === '' ? 'Добавьте описание' : 'Сохранить изменения'}>
              <CheckOutlined className={styles.icon} />
            </button>
            <button className={styles.btn} onClick={undoChanges} title="Отменить изменения">
              <CloseOutlined className={styles.icon} />
            </button>
          </>
        ) : (
          <>
            <button
              className={styles.btn}
              onClick={() => setEditing(true)}
              title="Редактировать описание">
              <EditOutlined className={styles.icon} />
            </button>
            <button className={styles.btn} onClick={() => dispatch(deleteToDo(i))} title="Удалить">
              <DeleteOutlined className={styles.icon} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ToDoItem;
