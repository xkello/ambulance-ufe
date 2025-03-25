import { newSpecPage } from '@stencil/core/testing';
import { XkelloAmbulanceWlApp } from '../xkello-ambulance-wl-app';

  describe('xkello-ambulance-wl-app', () => {

    it('renders editor', async () => {
      const page = await newSpecPage({
        url: `http://localhost/entry/@new`,
        components: [XkelloAmbulanceWlApp],
          html: `<xkello-ambulance-wl-app base-path="/"></xkello-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("xkello-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
        components: [XkelloAmbulanceWlApp],
          html: `<xkello-ambulance-wl-app base-path="/ambulance-wl/"></xkello-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("xkello-ambulance-wl-list");
  });
});
