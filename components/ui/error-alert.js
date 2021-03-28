import classes from "../../styles/error-alert.module.css";

function ErrorAlert(props) {
    return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
