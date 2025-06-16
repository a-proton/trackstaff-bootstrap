import MenuItems from "./MenuItems";
const Menu = () => {
  return (
    <aside>
      <div className="sidebar d-none d-md-block overflow-y-auto bg-white">
        {/* Offcanvas-body here */}
        <div className="offcanvas-body pt-3">
          <MenuItems />
        </div>
      </div>
    </aside>
  );
};

export default Menu;
