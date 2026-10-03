import JournalPage from "../../features/journal/pages/JournalPage";

export const metadata = {
  title: {
    default: "Journal",
    template: "%s | Jhan-Zine Maningo",
  },
  description: "Read the latest journal entries and insights from Jhan-Zine Maningo.",
  icons: {
    icon: "/mej.png",
  },
};

export default function Page() { return <JournalPage />; }
