export default function transformPassengerData(data) {
  const { result } = data;

  const columns = result.attributes.map((attr) => ({
    title: attr.name,
    dataIndex: attr.name,
    key: attr.name.toLowerCase(),
  }));

  const rows = result.rows.map((row, key) => ({ key, ...row }));

  return { columns, rows };
}
