import { Component, Event, EventEmitter,  Host, h } from '@stencil/core';

@Component({
  tag: 'cv3-ambulance-wl-list',
  styleUrl: 'cv3-ambulance-wl-list.css',
  shadow: true,
})
export class Cv3AmbulanceWlList {
  @Event({ eventName: "entry-clicked"}) entryClicked: EventEmitter<string>;
  waitingPatients: any[];

  private async getWaitingPatientsAsync(){
    return await Promise.resolve(
      [{
        name: 'Jožko Púčik',
        patientId: '10001',
        estimatedStart: new Date(Date.now() + 65 * 60),
        estimatedDurationMinutes: 15,
        condition: 'Kontrola'
      }, {
        name: 'Bc. August Cézar',
        patientId: '10096',
        estimatedStart: new Date(Date.now() + 30 * 60),
        estimatedDurationMinutes: 20,
        condition: 'Teploty'
      }, {
        name: 'Ing. Ferdinand Trety',
        patientId: '10028',
        estimatedStart: new Date(Date.now() + 5 * 60),
        estimatedDurationMinutes: 15,
        condition: 'Bolesti hrdla'
      }]
    );
  }

  async componentWillLoad() {
    this.waitingPatients = await this.getWaitingPatientsAsync();
  }

  render() {
    return (
      <Host>
        <md-list>
          {this.waitingPatients.map((patient, index) =>
            <md-list-item onClick={ () => this.entryClicked.emit(index.toString())}>
              <div slot="headline">{patient.name}</div>
              <div slot="supporting-text">{"Predpokladaný vstup: " + patient.estimatedStart?.toLocaleString()}</div>
              <md-icon slot="start">person</md-icon>
            </md-list-item>
          )}
        </md-list>
      </Host>
    );
  }
}
