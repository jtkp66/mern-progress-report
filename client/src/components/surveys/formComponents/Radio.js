import React, { Component } from "react";

export default class Radio extends Component {
  render() {
    return (
      <div>
        <div class="ui form">
          <div class="inline fields">
            <label>How often do you use checkboxes?</label>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="frequency" checked="checked" />
                <label>Once a week</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>2-3 times a week</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>Once a day</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>Twice a day</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
