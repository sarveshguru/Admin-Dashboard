import {
  GridColumnMenuColumnsItem,
  GridColumnMenuFilterItem,
} from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  const itemProps = {
    colDef: props.colDef,
    onClick: props.hideMenu,
  };
  return (
    <>
      <GridColumnMenuFilterItem {...itemProps} />
      <GridColumnMenuColumnsItem {...itemProps} />
    </>
  );
};

export default CustomColumnMenu;
