import EmployeeSideBar from "./EmployeeSideBar";
const EmployeeMenu = () => {
  return (
    <aside>
      <div className="sidebar d-none d-md-block overflow-y-auto bg-white">
        {/* Offcanvas-body here */}
        <div className="offcanvas-body pt-3">
          <EmployeeSideBar />
        </div>
      </div>
    </aside>
  );
};

export default EmployeeMenu;
