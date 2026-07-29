import { useState, useEffect } from "react";
import { Pencil, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface EditToggleProps {
  isActive: boolean;
  onToggle: () => void;
}

export function EditToggle({ isActive, onToggle }: EditToggleProps) {
  const [clickCount, setClickCount] = useState(0);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (clickCount > 0) {
      const timer = setTimeout(() => { setClickCount(0); }, 2000);
      return () => clearTimeout(timer);
    }
  }, [clickCount]);

  const handleClick = () => {
    if (isActive) { onToggle(); return; }
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 5) { onToggle(); setClickCount(0); }
    else if (newCount === 3) { setShowHint(true); setTimeout(() => setShowHint(false), 2000); }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showHint && !isActive && (
        <div className="animate-fade-in-up bg-gray-800 text-white px-3 py-1.5 rounded-full text-xs shadow-lg">
          再点{5 - clickCount}次进入编辑模式
        </div>
      )}
      {isActive && (
        <div className="animate-fade-in-up bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
          编辑模式已开启
        </div>
      )}
      <button onClick={handleClick} className={cn(
        "w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95",
        isActive ? "bg-primary text-primary-foreground" : "bg-white/30 text-gray-400 hover:bg-white/50 border border-white/50"
      )} title={isActive ? "退出编辑模式" : ""}>
        {isActive ? <Check className="w-5 h-5" /> : <Pencil className="w-4 h-4 opacity-50" />}
      </button>
    </div>
  );
}