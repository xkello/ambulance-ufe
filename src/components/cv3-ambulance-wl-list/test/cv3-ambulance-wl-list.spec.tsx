  import { newSpecPage } from '@stencil/core/testing';
import { Cv3AmbulanceWlList } from '../cv3-ambulance-wl-list';

describe('cv3-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv3AmbulanceWlList],
      html: `<cv3-ambulance-wl-list></cv3-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as Cv3AmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
