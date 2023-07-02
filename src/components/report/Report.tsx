import { Report } from "@/libs/interface";

interface ReportTableProps {
  data?: Report;
}

const ReportComponent = ({ data }: ReportTableProps) => {
  if (data)
    return (
      <div className="tablet:p-8 bg-white rounded shadow text-xl">

      </div>
    );
  return <></>
};

export default ReportComponent;
