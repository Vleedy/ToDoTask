import React from 'react';
import { Collapse } from 'antd';
import ToDoItem from '../ToDoItem';
import styles from './ToDos.module.scss';
import { useAppSelector } from '../../hooks/resux';

const { Panel } = Collapse;

const ToDos = () => {
  const { toDos } = useAppSelector((state) => state.toDos);
  return (
    <div className={styles.wrapper}>
      <Collapse style={{ border: 'none' }}>
        {toDos?.map((_, i) => (
          <Panel header="This is panel header 1" key={`${i}`}>
            <ToDoItem />
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default ToDos;
