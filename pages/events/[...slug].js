import {useRouter} from "next/router";

import {getFilteredEvents} from "../../data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventsPage() {
    const router = useRouter()
    const filterData = router.query.slug

    if (!filterData) {
        return <h3 className="center">Loading...</h3>
    }

    const numYear = +filterData[0]
    const numMonth = +filterData[1]


    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return (
            <>
                <ErrorAlert>
                    <p>Invalid filter, Please adjust your values!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/">Show All Events</Button>
                </div>
            </>

        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })


    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <p>No events found for the chosen filter!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/">Show All Events</Button>
                </div>
            </>
        )
    }

    const date = new Date(numYear, numMonth)

    return (
        <>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>
        </>
    );
}

export default FilteredEventsPage;