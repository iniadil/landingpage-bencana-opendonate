import { cn } from "@/lib/utils";

export interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  badge: { text: string; color: "red" | "blue" };
  raised: string;
  target: string; // e.g. "Rp 1 M"
  progress: number; // percentage
  buttonLabel: string;
  footer?: React.ReactNode;
}

export function ProgramCard({
  title,
  description,
  image,
  badge,
  raised,
  target,
  progress,
  buttonLabel,
  footer,
}: ProgramCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className={cn(
            "absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full text-white uppercase tracking-wider",
            badge.color === "red" ? "bg-red-600" : "bg-blue-600"
          )}
        >
          {badge.text}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-xl text-gray-900 mb-3 leading-tight group-hover:text-green-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
          {description}
        </p>

        <div className="mb-2">
          <div className="flex justify-between text-xs font-medium mb-2">
            <span className="text-gray-500">Terkumpul</span>
            <span className="text-green-600 font-bold">{progress}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between items-end text-sm mb-6">
          <div>
            <div className="font-bold text-gray-900">{raised}</div>
          </div>
          <div className="text-gray-400 text-xs">
            Target: <span className="text-gray-500">{target}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          {footer}
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors">
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
