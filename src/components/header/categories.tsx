import { List, ListItem } from "flowbite-react";

function UiCategory() {
  return (
    <List horizontal className="text-gray-900 dark:text-whit my-2 gap-8">
      <ListItem>Erkaklar</ListItem>
      <ListItem>Ayollar</ListItem>
      <ListItem>Bolalar</ListItem>
      <ListItem>Fudbolkalar</ListItem>
      <ListItem>Poyabzallar</ListItem>
      <ListItem>Aksesuarlar</ListItem>
    </List>
  );
}
export default UiCategory;
