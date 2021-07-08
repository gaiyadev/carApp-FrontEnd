import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Grid from "@material-ui/core/Grid";
import ScoreCard from "../../components/dashboard/scoreCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sm={12}>
          <ScoreCard title="Symtoms" stats="485" icon={<AttachMoneyIcon />} />
        </Grid>
        <Grid item xs={12} md={3} sm={12}>
          <ScoreCard title="Users" stats="485" icon={<AttachMoneyIcon />} />
        </Grid>
        <Grid item xs={12} md={3} sm={12}>
          <ScoreCard title="type" stats="450" icon={<AttachMoneyIcon />} />
        </Grid>
        <Grid item xs={12} md={3} sm={12}>
          <ScoreCard title="Blank" stats="0" icon={<AttachMoneyIcon />} />
        </Grid>
      </Grid>
    </div>
  );
};
Home.layout = "DashboardLayout";
export default Home;
