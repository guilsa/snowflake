// @flow

import React from 'react'
import type { MilestoneMap, TrackMap } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  activeTracks: TrackMap,
  focusedTrackId: string,
  categoryColorScale: Function,
  setFocusedTrackIdFn: (string) => void
}

class TrackSelector extends React.Component<Props> {
  render() {
    const trackIds = Object.keys(this.props.activeTracks)
    return (
      <table>
        <style jsx>{`
          table {
            width: 100%;
            border-spacing: 3px;
            border-bottom: 2px solid #ccc;
            padding-bottom: 20px;
            margin-bottom: 20px;
            margin-left: -3px;
          }
          .track-selector-value {
            line-height: 50px;
            width: 50px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          .track-selector-label {
            text-align: center;
            font-size: 9px;
          }
        `}</style>
        <tbody>
          <tr>
            {trackIds.map(trackId => (
              <td key={trackId} className="track-selector-label" onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                {this.props.activeTracks[trackId].displayName}
              </td>
            ))}
          </tr>
          <tr>
            {trackIds.map(trackId => (
              <td key={trackId} className="track-selector-value"
                  style={{border: '4px solid ' + (trackId == this.props.focusedTrackId ? '#000': this.props.categoryColorScale(this.props.activeTracks[trackId].category)), background: this.props.categoryColorScale(this.props.activeTracks[trackId].category)}}
                  onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                {this.props.milestoneByTrack[trackId]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default TrackSelector
