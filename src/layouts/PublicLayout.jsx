
"use client";

import Sidebar from "../components/layout/Sidebar";
import MobileHeader from "../components/layout/MobileHeader";
import LayoutContainer from "../components/ui/LayoutContainer";

function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-transparent"
         onContextMenu={(event) => event.preventDefault()}
    >
      {/* Mobile */}
      <div className="xl:hidden">
        <MobileHeader />

        <main className="min-h-[calc(100svh-6rem)] overflow-x-hidden pt-24">
          <LayoutContainer className="h-full py-0">
            {children}
          </LayoutContainer>
        </main>
      </div>

      {/* Desktop */}
      <div className="hidden xl:block">
        <Sidebar />

        <main className="pt-24">
          <LayoutContainer>{children}</LayoutContainer>
        </main>
      </div>
    </div>
  );
}

export default PublicLayout;
