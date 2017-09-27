import React from 'react';
import TrackListItem from './track-list-item';

class TrackList extends React.Component {
  render() {
    const { tracks } = this.props;
    const trackListItems = tracks.map(
      track => <TrackListItem key={track.id} track={track} />
    );

    return (
      <div>
        <span className="category-header">
          Track List
        </span>
        <ul>
          {trackListItems}
        </ul>
      </div>
    )
  }
}

export default TrackList;
