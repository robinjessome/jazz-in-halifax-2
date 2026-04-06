interface DataAccordionProps {
  title?: string;
  data: Record<string, unknown> | unknown[] | null | undefined;
}

const DataAccordion = ({ title = "Page Data", data }: DataAccordionProps) => {
  return (
    <div className="my-4">
      <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
        <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors list-none">
          <span className="font-medium text-gray-700">{title}</span>
          {/* Custom Chevron Icon */}
          <svg
            className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <pre className="text-xs overflow-x-auto text-gray-800 leading-relaxed">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </details>
    </div>
  );
};

export default DataAccordion;