interface TableProps {
  data: any[];
  columns: string[];
}

const Table = (props: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {props.columns.map((column, index) => {
            return <th key={index}>{column}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row, index) => {
          return (
            <tr key={index}>
              {props.columns.map((column, index) => {
                return <td key={index}>{row[column]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
