import { useState } from 'react';
import { Input, Button } from 'antd';
import { useAppDispatch } from '../../hooks/redux';
import { addToDo } from '../../redux/slices/ToDoSlice';
import styles from './AddToDo.module.scss';

const { TextArea } = Input;

const AddToDo: React.FC = () => {
  const dispatch = useAppDispatch();
  const [toDo, setToDo] = useState({ name: '', description: '' });

  const addName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setToDo((item) => ({ ...item, name: e.target.value }));
  };

  const addDescripton = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setToDo((item) => ({ ...item, description: e.target.value }));
  };

  const handleClickAdd = (e: React.FormEvent): void => {
    e.preventDefault();
    const date: number = new Date().getTime();

    dispatch(addToDo({ ...toDo, date }));
    setToDo({ name: '', description: '' });
  };

  return (
    <form className={styles.wrapper} onSubmit={(e) => handleClickAdd(e)}>
      <Input
        required
        placeholder="Добавьте название"
        allowClear
        value={toDo.name}
        onChange={(e) => addName(e)}
      />

      <TextArea
        required
        placeholder="Добавьте описание"
        allowClear
        value={toDo.description}
        onChange={(e) => addDescripton(e)}
      />

      <Button
        className={styles.button}
        type="primary"
        htmlType="submit"
        style={
          toDo.name === '' || toDo.description === ''
            ? { background: '#d9d9d9' }
            : { background: '#f1dac4' }
        }>
        <span className={styles.button__text}>Добавить</span>
      </Button>
    </form>
  );
};

export default AddToDo;
