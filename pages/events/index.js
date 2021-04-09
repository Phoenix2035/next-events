import {useRouter} from "next/router";

import {getAllEvents} from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage(props) {
    const router = useRouter()
    const {events} = props

    const findEventsHandler = (year, month) => {
        router.push(`/events/${year}/${month}`);
    }

    return (
        <>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items={events}/>
        </>
    );
}

export async function getStaticProps() {
    const events = await getAllEvents()

    return {
        props: {
            events
        }
    }
}

export default AllEventsPage;