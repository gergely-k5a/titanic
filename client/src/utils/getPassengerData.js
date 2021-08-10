import ColumnHeader from '../components/ColumnHeader';

export default function transformPassengerData(data) {
  const { result } = data;

  const columns = result.attributes.map((attr) => {
    const title = attr.name;
    const colKey = title.toLowerCase().split(' ').slice(0, 3).join('_');

    return {
      title: <ColumnHeader {...{ title, colKey }} />,
      dataIndex: title,
      key: colKey,
    };
  });

  const rows = result.rows.map((row, key) => ({ key, ...row }));

  return { columns, rows };
}
