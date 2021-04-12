import Image from "next/image";

import classes from "../../styles/event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

function EventItem({id, title, location, date, image}) {

    const readableDate = new Date(date).toLocaleDateString("en-Us", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    const formattedAddress = location.replace(", ", "\n")

    return (
        <li className={classes.item}>
            <Image src={`/${image}`} alt={title} width={250} height={200}/>
            <div className={classes.content}>
                <div>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon/>
                        <time>{readableDate}</time>
                    </div>

                    <div className={classes.address}>
                        <AddressIcon/>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={`/events/${id}`}>
                        <span>Explore Event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon/>
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem;