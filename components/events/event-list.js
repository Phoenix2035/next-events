import EventItem from "./event-item";
import classes from "../../styles/event-list.module.css";


function EventList({items}) {
    return (
        <ul className={classes.list}>
            {
                items.map(item =>
                    <EventItem key={item.id} {...item}/>
                )
            }
        </ul>
    )
}

export default EventList;