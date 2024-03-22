import SportSection from "@/components/Sports";
import CollectionSection from "@/components/Collection";
import ToggleButton from "@/components/ToggleButton";

const page = () => {
  return (
    <div className="dark:bg-primary-dark bg-primary-light h-full w-full flex justify-center items-start">
      <div className="w-10/12 gap-9 flex justify-center flex-col items-start min-h-screen pb-20 pt-16">
        <ToggleButton />
        <SportSection />
        <CollectionSection />
      </div>
    </div>
  );
};

export default page;
