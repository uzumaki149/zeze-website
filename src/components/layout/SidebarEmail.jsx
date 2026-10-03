
import { Mail } from "lucide-react";

function SidebarEmail() {
  return (
    <div>
      <a
        href="mailto:zzvillegas75@gmail.com"
        className="
          inline-flex items-center gap-2 px-3
          font-ui text-xs text-zinc-400
          transition-colors duration-200
          hover:text-zinc-100
        "
      >
        <Mail size={15} />
        <span>zzvillegas75@gmail.com</span>
      </a>
    </div>
  );
}

export default SidebarEmail;