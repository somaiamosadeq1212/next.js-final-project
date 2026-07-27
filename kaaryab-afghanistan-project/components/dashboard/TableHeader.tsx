import SortButton from "./SortButton";

type Props = {
  onSort: () => void;
};

export default function TableHeader({
  onSort,
}: Props) {
  return (
    <thead className="bg-muted">

      <tr>

        <th className="px-6 py-4 text-left">
          <SortButton
            label="Title"
            onClick={onSort}
          />
        </th>

        <th className="px-6 py-4 text-left">
          Category
        </th>

        <th className="px-6 py-4 text-left">
          Organization
        </th>

        <th className="px-6 py-4 text-left">
          Deadline
        </th>

        <th className="px-6 py-4 text-center">
          Actions
        </th>

      </tr>

    </thead>
  );
}