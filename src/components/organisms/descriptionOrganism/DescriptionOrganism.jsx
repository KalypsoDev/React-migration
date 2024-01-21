import { RoundedButton } from "../../atoms/buttons/roundedButton/RoundedButton";
import { SquaredButton } from "../../atoms/buttons/squaredButton/SquaredButton";

import "./descriptionOrganism.css"

export default function DescriptionOrganism() {
  return (
    <section id="description">
      <div id="description__organize">
        <div id="organize__left">
          <img src="/assets/img/description-1-app.png" alt="Picks" />
        </div>
        <div id="organize__right">
          <h2>Organize Your Time And Start Getting Results</h2>
          <p>
            Sync is the first mobile app on the market to harness the power of
            social connections to help you stop procrastinating and start
            getting things done. Give it a try and see the changes right away
          </p>
          <ul>
            <li>Analyse and evaluate your current status and productivity</li>
            <li>Begin monitoring your day to day routine with Sync app</li>
            <li>See the improved results in no more than a couple of weeks</li>
          </ul>
          <RoundedButton
            href="https://femcoders.factoriaf5.org/"
            classButton="button--red"
            textButton="Lightbox"
          />
        </div>
      </div>

      <div id="description__schedule">
        <div id="schedule__left">
          <div id="schedule__buttons">
            <div id="schedule__columns">
              <div id="schedule__column1">
                <SquaredButton
                  idButton="schedule__button"
                  icon="fa-regular fa-clock"
                  id="schedule__clock"
                  textButton="Schedule"
                />
                <SquaredButton
                  icon="fa fa-list-ul"
                  textButton="Tracking"
                />
              </div>
              <div id="schedule__column2">
                <SquaredButton
                  icon="fa fa-calendar-alt"
                  textButton="Organize"
                />
              </div>
            </div>
          </div>
          <p>
            <b>Schedule tasks</b> to keep track of their completion. Sync
            provides multiple scheduling options including alarms and reminders.
          </p>
          <ul>
            <li>
              <i className="fa-regular fa-square-check"></i>You can always add
              new tasks or change the settings of existing ones in your calendar
              view or the app control panel
            </li>
            <li>
              <i className="fa-regular fa-square-check"></i>It's easy to stay
              focused on your most important daily activities that will get you
              closer to meeting your goals
            </li>
            <li>
              <i className="fa-regular fa-square-check"></i>Use phone reminders
              to free up your long term memory which will reduce stress and make
              you more productive
            </li>
          </ul>
          <div className="terms__buttons">
            <RoundedButton
              href="https://femcoders.factoriaf5.org/"
              classButton="button--red"
              textButton="Terms"
            />
            <RoundedButton
              href="https://www.somosf5.org/"
              classButton="button--white"
              textButton="Privacy"
            />
          </div>
        </div>
        <div id="schedule__right">
          <img src="/assets/img/description-2-app.png" alt="Calendar" />
        </div>
      </div>
    </section>
  );
}
