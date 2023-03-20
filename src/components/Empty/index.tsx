import { ExceptionOutlined } from '@ant-design/icons';

const Empty = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        color: 'rgb(217, 217, 217)',
      }}>
      <ExceptionOutlined style={{ fontSize: '5rem' }} />
      <h1 style={{ textAlign: 'center', color: 'rgb(217, 217, 217)' }}>Список задач пуст :(</h1>
    </div>
  );
};

export default Empty;
