import SportSection from "@/components/Sports";
import CollectionSection from "@/components/Collection";

const page = () => {
  return (
    <div className="bg-primary-dark h-full w-full flex justify-center items-start">
      <div className="w-10/12 gap-9 flex justify-center flex-col items-start min-h-screen pb-20 pt-16">
        <SportSection />
        <CollectionSection />
      </div>
    </div>
  );
};

export default page;
