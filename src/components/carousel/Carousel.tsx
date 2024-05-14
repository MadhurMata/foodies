const Carousel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-auto m-auto flex flex-col bg-white">
      <div id="scrollbar" className="hide-scroll-bar flex">
        <div className="flex flex-nowrap">{children}</div>
      </div>
    </div>
  );
};

export default Carousel;
