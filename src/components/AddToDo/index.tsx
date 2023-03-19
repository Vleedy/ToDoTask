import { useState } from 'react';
import { Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addToDo } from '../../redux/slices/ToDoSlice';
import styles from './AddToDo.module.scss';
const { TextArea } = Input;

const AddToDo: React.FC = () => {
  const dispatch = useDispatch();
  const [toDo, setToDo] = useState({ name: '', descr: '' });

  const addName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setToDo((item) => ({ ...item, name: e.target.value }));
  };

  const addDescr = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setToDo((item) => ({ ...item, descr: e.target.value }));
  };

  const handleClickAdd = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch(addToDo(toDo));
    setToDo({ name: '', descr: '' });
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
        value={toDo.descr}
        onChange={(e) => addDescr(e)}
      />

      <Button
        className={styles.button}
        type="primary"
        htmlType="submit"
        style={
          toDo.name === '' || toDo.descr === ''
            ? { background: '#d9d9d9' }
            : { background: '#f1dac4' }
        }>
        <span className={styles.button__text}>Добавить</span>
      </Button>
    </form>
  );
};

export default AddToDo;
