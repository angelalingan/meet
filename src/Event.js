import React, { Component } from "react";

class Event extends Component {
    render() {
        const { event } = this.props;
        return (
            <div>
                <h1 className="summary">{event.summary}</h1>
                <p className="event-start">{event.start.dateTime}</p>
                <p className="event-location">{`@${event.summary} | ${event.location}`}</p>
            </div>
        );
    }
}
export default Event;