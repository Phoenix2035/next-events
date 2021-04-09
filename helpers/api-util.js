export async function getAllEvents() {
    const res = await fetch("https://next-events-e2109-default-rtdb.firebaseio.com/events.json")
    const data = await res.json()

    const events = []

    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        })
    }
    return events
}


export async function getFeaturedEvents() {
    const allEvents = await getAllEvents()
    return allEvents.filter(item => item.isFeatured)
}


export async function getEventById(id) {
    const allEvents = await getAllEvents()
    return allEvents.find(item => item.id === id)
}

export async function getFilteredEvents({year, month}) {
    const allEvents = await getAllEvents()
    return allEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
}