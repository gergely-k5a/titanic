import { Modal, Button } from 'antd';
import { useState } from 'react';
import ColumnDiagram from './ColumnDiagram';

function ColumnHeader({ title, colKey }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="link" onClick={showModal}>
        {title}
      </Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <ColumnDiagram columnLabel={colKey} />
      </Modal>
    </>
  );
}

export default ColumnHeader;
