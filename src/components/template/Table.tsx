import { render } from 'react-dom';
import { PencilIcon, TrashIcon } from '../icons';

interface TableProps {
  data: any[];
  columns: any[];
  onEdit?: (row: any) => void;
  onDelete?: (row: any) => void;
}

export default function Table(props: TableProps) {
  function renderColumns(row: any, columns: any[]): import('react').ReactNode {
    if (!columns) return null;
    return columns.map((column) => renderLine(column, row));
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="bg-gray-900">
        <tr>
          {props.columns?.map((column) => (
            <th key={column.key} className="p-2 text-left">
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data?.map((row, index) => (
          <tr className="bg-gray-500" key={index}>
            {renderColumns(row, props.columns)}
          </tr>
        ))}
      </tbody>
    </table>
  );

  function renderLine(column: any, row: any) {
    if (column.key === 'actions') {
      return (
        <td key={column.key} className="p-2 text-left">
          <button
            onClick={() => props.onEdit && props.onEdit(row)}
            className="bg-blue-800 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            {PencilIcon}
          </button>
          <button
            onClick={() => props.onDelete && props.onDelete(row)}
            className="hover:bg-red-800 bg-red-700 text-white p-2 ml-1 rounded-lg"
          >
            {TrashIcon}
          </button>
        </td>
      );
    }
    return (
      <td key={column.key} className="p-2 text-left">
        {row[column.key]}
      </td>
    );
  }
}
