import { gridItems } from "@/data";
import { BentoGridItem } from "./BentoGridItem";

const Grid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-9 md:grid-rows-4 lg:grid-rows-3 gap-3 md:gap-4 lg:h-screen lg:gap-8 p-5 md:p-10 lg:px-20 ">
      {gridItems.map((item, i) => (
        <BentoGridItem
          id={item.id}
          key={i}
          title={item.title}
          description={item.description}
          img={item.img}
        />
      ))}
    </div>
  );
};

export default Grid;
