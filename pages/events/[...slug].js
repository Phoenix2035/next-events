import {useRouter} from "next/router";

import {getFilteredEvents} from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventsPage(props) {

    if (props.hasErrors) {
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

    const filteredEvents = props.events


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

    const date = new Date(props.date.year, props.date.month)

    return (
        <>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>
        </>
    );
}


export async function getServerSideProps(context) {
    const {params} = context

    const filterData = params.slug

    const numYear = +filterData[0]
    const numMonth = +filterData[1]


    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return {
            props: {
                hasErrors: true
            },
            // notFound:true,
            // redirect:{
            //     destination:"/error"
            // }
        }
    }

    const filteredEvents = await getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    return {
        props: {
            events: filteredEvents,
            date: {
                year: numYear,
                month: numMonth
            }
        }
    }
}

export default FilteredEventsPage;