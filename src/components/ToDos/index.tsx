import { Collapse } from 'antd';
import ToDoItem from '../ToDoItem';
import styles from './ToDos.module.scss';
import Empty from '../Empty';
import { useAppSelector } from '../../hooks/redux';

const { Panel } = Collapse;

const ToDos = () => {
  const { toDos } = useAppSelector((state) => state.toDosReducer);
  return (
    <div className={styles.wrapper}>
      {toDos.length ? (
        <Collapse style={{ border: 'none' }}>
          {toDos?.map((item, i) => (
            <Panel style={{ wordBreak: 'break-all' }} header={item.name} key={`${item.date}`}>
              <ToDoItem i={i} description={item.description} date={item.date} />
            </Panel>
          ))}
        </Collapse>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default ToDos;
