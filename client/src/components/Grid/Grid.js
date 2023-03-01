import classes from "./Grid.module.css";

// Grid BTN
import GridBtn from "./GridBtns/GridBtn";

const Grid = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.grid_container}>
        <div className={`${classes.grid_item} ${classes.cell_one}`}>
          <GridBtn name="hoodies" />
        </div>
        <div className={`${classes.grid_item} ${classes.cell_two}`}>
          <GridBtn name="designer" />
        </div>
        <div className={`${classes.grid_item} ${classes.cell_three}`}>
          <GridBtn name="sunglasses" />
        </div>
        <div className={`${classes.grid_item} ${classes.cell_four}`}>
          <GridBtn name="trending" />
        </div>
        <div className={`${classes.grid_item} ${classes.cell_five}`}>
          <GridBtn name="new in" />
        </div>
        <div className={`${classes.grid_item} ${classes.cell_six}`}>
          <GridBtn name="shoes" />
        </div>
      </div>
    </div>
  );
};

export default Grid;
