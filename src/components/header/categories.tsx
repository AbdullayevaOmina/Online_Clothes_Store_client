import { Dropdown } from "flowbite-react";

function UiCategory() {
  return (
    <div className=" flex gap-5">
      <Dropdown label="Ayollar" inline dismissOnClick={false}>
        <Dropdown.Item>Catwgory 1</Dropdown.Item>
        <Dropdown.Item>Catwgory 2</Dropdown.Item>
        <Dropdown.Item>Catwgory 3</Dropdown.Item>
      </Dropdown>
      <Dropdown label="Erkaklar" inline dismissOnClick={false}>
        <Dropdown.Item>Catwgory 1</Dropdown.Item>
        <Dropdown.Item>Catwgory 2</Dropdown.Item>
        <Dropdown.Item>Catwgory 3</Dropdown.Item>
      </Dropdown>
    </div>
  );
}
export default UiCategory;
