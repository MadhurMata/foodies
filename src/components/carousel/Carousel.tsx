const Carousel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="scrollbar" className="hide-scroll-bar flex">
      <div className="flex flex-nowrap">{children}</div>
    </div>
  );
};

export default Carousel;
