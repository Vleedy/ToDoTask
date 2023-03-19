import { Collapse } from 'antd';
import ToDoItem from '../ToDoItem';
import styles from './ToDos.module.scss';
import { useAppSelector } from '../../hooks/redux';

const { Panel } = Collapse;

const ToDos = () => {
  const { toDos } = useAppSelector((state) => state.toDos);
  return (
    <div className={styles.wrapper}>
      <Collapse style={{ border: 'none' }}>
        {toDos?.map((item, i) => (
          <Panel header={item.name} key={`${item.date}`}>
            <ToDoItem i={i} description={item.description} date={item.date} />
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default ToDos;
