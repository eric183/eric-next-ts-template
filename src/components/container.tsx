import { LeftContent, MiddleContent, RightContent } from "./content";

const MainContainer = () => {
  // console.log("reRender");
  return (
    <main className="flex flex-row flex-1">
      <LeftContent />
      <MiddleContent />
      <RightContent />
    </main>
  );
};

export default MainContainer;
