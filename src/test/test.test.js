import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import VotingOptionsList from '../components/VotingOptionsList.vue'

test('mount component', async () => {
  // expect(VotingOptionsList).toBeTruthy()

  const wrapper = mount(VotingOptionsList, {});

  // expect(wrapper.text()).toContain('OPTION IS ')
})
