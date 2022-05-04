import { describe, expect, it } from '@jest/globals';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest';
import { mount, shallowMount } from '@vue/test-utils';
import { QBtn } from 'quasar';
import QBtnDemo from './demo/QBtnDemo';

// specify here quasar config you'll need to test your component
installQuasarPlugin();

describe('mybutton', () => {
  it('has increment method', () => {
    const wrapper = mount(QBtnDemo);
    const { vm } = wrapper;

    expect(typeof vm.increment).tobe('function');
  });

  // it('sets the correct default data', () => {
  //   const wrapper = mount(mybutton);
  //   const { vm } = wrapper;

  //   expect(typeof vm.counter).tobe('number');
  //   expect(vm.counter).tobe(0);
  // });

  // it('correctly updates counter when button is pressed', async () => {
  //   const wrapper = shallowMount(mybutton);
  //   const { vm } = wrapper;

  //   const button = wrapper.findcomponent(QBtn);
  //   await button.trigger('click');
  //   expect(vm.counter).tobe(1);
  // });
});
