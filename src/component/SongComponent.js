import React, {Component} from 'react';

class Song extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: props.songs
    }

  }

  render() {
    return (
        <div className="container">
          {this.state.songs.map(s => {
            return (
                <div className="row" key={s.id}>
                  <div className="row-content">
                    {s.title}, {s.author}
                  </div>
                </div>
            )
          })}
        </div>
    );
  }
}

export default Song;