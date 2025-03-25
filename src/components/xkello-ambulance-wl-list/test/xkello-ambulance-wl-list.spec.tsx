  import { newSpecPage } from '@stencil/core/testing';
import { XkelloAmbulanceWlList } from '../xkello-ambulance-wl-list';

describe('xkello-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XkelloAmbulanceWlList],
      html: `<xkello-ambulance-wl-list></xkello-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as XkelloAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
