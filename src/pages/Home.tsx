import { ContentBar } from "../components/ContentBar";
import { TitleBar } from "../components/TitleBar";
import { TopBar } from "../components/TopBar";
export function Home() {
  return (
    <div>
      <TopBar />
      <TitleBar title={"ॐ काशीन देवाय नमः"} />
      <ContentBar />
    </div>
  );
}
